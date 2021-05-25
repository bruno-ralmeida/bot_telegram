/* eslint-disable prefer-const */
import { Injectable } from '@nestjs/common';
import { Context } from 'node:vm';
import { Categories } from 'src/helpers';
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

    this.bot.hears(this.gameMenuCategories, async (ctx) => {
      const category = ctx.match.input;
      const gameCategory = await this.gameRepository.fetchContentFromGameBase(
        category
      );

      const msg = `Você selecionou a categoria ${category}.\n Esse link pode ser compartilhado com amigos: \n${gameCategory.quizLink}`;

      ctx.reply(msg, Markup.keyboard(['/voltar']));
    });
  }

  async startGame(ctx: Context) {
    return await ctx.reply(
      'Selecione uma categoria:',
      Markup.keyboard(this.gameMenuCategories).resize()
    );
  }
}
