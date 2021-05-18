import { Injectable, forwardRef, Inject } from '@nestjs/common';
import { Context } from 'node:vm';
import { GameService } from 'src/game/game.service';
import { Telegraf } from 'telegraf';
import { IbmWatsonService } from '../ibm-watson/ibm-watson.service';

@Injectable()
export class TelegrafService {
  telegraf: Telegraf;
  constructor(
    @Inject(forwardRef(() => IbmWatsonService))
    private readonly watsonService: IbmWatsonService,
  ) {
    this.telegraf = new Telegraf(process.env.TELEGRAM_TOKEN);
    // this.telegraf.start((ctx: Context) => {
    //   return ctx.reply('Olá, eu sou a Sophia!');
    // });

    // this.telegraf.on('text', (ctx: Context) => {
    //   try {
    //     this.watsonService.watsonResponse(ctx);
    //   } catch (error) {
    //     ctx.reply('Erro durante análise do Watson.');
    //   }
    // });
    const game = new GameService(this.telegraf);
    game.loadGame();
    console.log('🤖 - Bot Started!');
    this.telegraf.launch();
    process.once('SIGINT', () => this.telegraf.stop('SIGINT'));
    process.once('SIGTERM', () => this.telegraf.stop('SIGTERM'));
  }

  showMessage(ctx: Context, msg: string) {
    ctx.reply(msg);
  }
}
