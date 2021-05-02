import { Injectable, forwardRef, Inject } from '@nestjs/common';
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
    this.telegraf.start((ctx) => {
      return ctx.reply('Eai meu parceiro');
    });
    this.telegraf.on('text', (ctx) => {
      try {
        this.watsonService.watsonResponse(ctx);
      } catch (error) {
        ctx.reply('Erro');
      }
    });
    console.log('🤖 - Bot Started!');
    this.telegraf.launch();
    process.once('SIGINT', () => this.telegraf.stop('SIGINT'));
    process.once('SIGTERM', () => this.telegraf.stop('SIGTERM'));
  }

  showMessage(ctx, res) {
    const { intents } = res.result.output || null;
    intents.map((i) => {
      ctx.reply(i);
    });
  }
}
