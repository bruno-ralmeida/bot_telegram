import { Injectable, forwardRef, Inject } from '@nestjs/common';
import { Context } from 'node:vm';
import { Markup, Telegraf } from 'telegraf';
import {} from 'telegraf';
import { GameService } from '../game/game.service';
import { IbmWatsonService } from '../ibm-watson/ibm-watson.service';

@Injectable()
export class TelegrafService {
  telegraf: Telegraf;
  private readonly menuOptions = [
    'Conversar comigo',
    'Carreira',
    'Links Úteis',
    'Game',
  ];
  private readonly menuTrigger = ['sophia', 'menu', 'opções'];

  private category = '';

  constructor(
    @Inject(forwardRef(() => IbmWatsonService))
    private readonly watsonService: IbmWatsonService,
  ) {
    this.telegraf = new Telegraf(process.env.TELEGRAM_TOKEN);

    this.telegraf.start((ctx: Context) => {
      const name = ctx.update.message.from.first_name;
      const msg = `Olá, ${name}! O meu nome é Sophia e hoje estou aqui para lhe ajudar! Para começarmos, vou lhe passar todas as opções que temos, e peço para que selecione a desejada! Ah, e caso queira voltar ao menu inicial, é só escrever meu nome ou "menu"! 🚀`;

      this.showStartupMenu(msg, ctx);
    });

    //Trigger Menu
    this.telegraf.hears(
      this.menuTrigger.map((mt) => mt.toLowerCase()),
      async (ctx) => {
        const name = ctx.update.message.from.first_name;
        const msg = `Oie, ${name}! Voltei! Vou lhe passar os menus novamente!`;
        this.showStartupMenu(msg, ctx);
      },
    );
    const game = new GameService(this.telegraf);
    //Trigger Start Menu
    this.telegraf.hears(
      this.menuOptions.map((op) => op),
      async (ctx) => {
        this.category = ctx.match.input;
        switch (this.category) {
          case 'Conversar comigo':
            await ctx.reply(
              'Certo! O que você gostaria de saber? ✨️',
              Markup.removeKeyboard(),
            );
            break;
          case 'Carreira':
            await ctx.reply('Vamos conversar de carreira meu bom. 💼');
            break;
          case 'Links Úteis':
            await ctx.reply('Vou te enviar uns links meu bom. 💡');
            break;
          case 'Game':
            await ctx.reply('Certo! Vamos jogar 🎮');
            await game.startGame(ctx);
            break;
          default:
            await ctx.reply('❌️ Selecione uma opção válida. ❌️');
            break;
        }
      },
    );

    this.telegraf.on('text', (ctx: Context) => {
      try {
        if (this.category == 'Conversar comigo')
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
    const btnMenu = Markup.keyboard(this.menuOptions).resize();
    await ctx.reply(msg, btnMenu);
    return;
  }
}
