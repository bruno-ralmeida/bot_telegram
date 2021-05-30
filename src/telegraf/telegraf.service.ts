import { Injectable, forwardRef, Inject } from '@nestjs/common';
import { join } from 'path';
import { Context } from 'node:vm';
import { CareerService } from 'src/career/career.service';
import { LinksService } from 'src/links/links.service';
import { Markup, Telegraf } from 'telegraf';
import { GameService } from '../game/game.service';
import { IbmWatsonService } from '../ibm-watson/ibm-watson.service';

@Injectable()
export class TelegrafService {
  telegraf: Telegraf;
  game: GameService;
  links: LinksService;
  career: CareerService;

  private category = '';
  private msg = '';
  private readonly menuTrigger = ['/voltar', '/menu'];
  private readonly selectedOptionMenuTrigger = [
    'Conversar sobre programação',
    'Carreira',
    'Links Úteis',
    'Game',
  ];

  constructor(
    @Inject(forwardRef(() => IbmWatsonService))
    private readonly watsonService: IbmWatsonService
  ) {
    this.telegraf = new Telegraf(process.env.TELEGRAM_TOKEN);
    this.game = new GameService(this.telegraf);
    this.links = new LinksService(this.telegraf);
    this.career = new CareerService(this.telegraf);

    this.telegraf.hears(this.selectedOptionMenuTrigger, async (ctx) => {
      this.category = ctx.match.input;

      switch (this.category) {
        case 'Conversar sobre programação':
          await ctx.replyWithSticker({
            source: join(
              __dirname,
              '..',
              '..',
              './public/images/sophia-doubt.png'
            ),
          });
          await ctx.reply(
            `Certo! O que você gostaria de saber?
            Dica: Faça perguntas como:
            "O que é uma variável?" 
            "Como utilizar uma variável?"`,
            Markup.removeKeyboard()
          );
          break;

        case 'Carreira':
          await this.career.showRoadmap(ctx);
          break;

        case 'Links Úteis':
          await this.links.showLinks(ctx);
          break;

        case 'Game':
          await this.game.startGame(ctx);

          break;

        default:
          await ctx.reply('❌️ Selecione uma opção válida. ❌️');
          break;
      }
    });

    this.telegraf.hears(this.menuTrigger, (ctx: Context) => {
      this.showStartupMenu(this.msg, ctx);
    });

    this.telegraf.start(async (ctx: Context) => {
      await ctx.replyWithSticker({
        source: join(__dirname, '..', '..', './public/images/sophia.png'),
      });

      const name = ctx.update.message.from.first_name;
      this.msg = `Olá, ${name}! O meu nome é Sophia e hoje estou aqui para lhe ajudar! Para começarmos, vou lhe passar todas as opções que temos, e peço para que selecione a desejada! Ah, e caso queira voltar ao menu inicial, é só enviar: \n"/start", "/voltar" ou "/menu"! 🚀`;

      this.showStartupMenu(this.msg, ctx);
    });

    this.telegraf.on('text', (ctx: Context) => {
      try {
        if (this.category != 'Conversar sobre programação')
          return ctx.reply(`Por favor, informe uma opção válida.
          Caso queira voltar ao menu inicial, é só enviar: \n"/start", "/voltar" ou "/menu"!`);

        this.watsonService.watsonResponse(ctx);
      } catch (error) {
        ctx.reply('Erro durante análise do Watson.');
      }
    });

    this.telegraf.launch();
    process.once('SIGINT', () => this.telegraf.stop('SIGINT'));
    process.once('SIGTERM', () => this.telegraf.stop('SIGTERM'));
  }

  async showStartupMenu(msg = '', ctx: Context) {
    const btnMenu = Markup.keyboard(this.selectedOptionMenuTrigger).resize();
    await ctx.reply(msg, btnMenu);
    return;
  }
}
