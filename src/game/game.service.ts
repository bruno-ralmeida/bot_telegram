import { Injectable } from '@nestjs/common';
import { Context } from 'node:vm';
import { Categories } from 'src/repository/game/game';
import { Markup, Telegraf } from 'telegraf';
import { GameRepositoryService } from '../repository/game/gameRepository.service';

@Injectable()
export class GameService {
  private readonly gameRepository = new GameRepositoryService();

  private gameMenuCategories: string[] = [];

  constructor(private readonly bot: Telegraf) {
    this.bot = bot;

    for (const key in Categories) {
      this.gameMenuCategories.push(Categories[key]);
    }

    this.bot.hears(
      this.gameMenuCategories.map((op) => op),
      async (ctx) => {
        const category = ctx.match.input;

        const questions = this.gameRepository.fetchContentFromGameBase(
          category,
        );

        questions.forEach((item) => {
          return ctx.reply(
            `${item.question}`,
            Markup.keyboard(item.options).selective(true),
          );
        });

        console.log(ctx);
        this.bot.on('text', (ctx) => {
          ctx.reply('ola');
        });
      },
    );
  }

  async startGame(ctx: Context) {
    await this.showGameCategories(ctx);
  }

  private async showGameCategories(ctx: Context) {
    await ctx.reply(
      'Selecione uma categoria:',
      Markup.keyboard(this.gameMenuCategories).resize(),
    );
    return;
  }
}
