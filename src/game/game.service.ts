import { Injectable } from '@nestjs/common';
import { Context } from 'node:vm';
import { Markup, Telegraf } from 'telegraf';
import { GameRepositoryService } from '../repository/game/gameRepository.service';

@Injectable()
export class GameService {
  private readonly gameRepository = new GameRepositoryService();
  private readonly gameMenuCategories: string[] = [
    'Back-End',
    'Front-End',
    'DevOps',
    'Mobile',
    'UI/UX',
  ];

  constructor(private readonly telegraf: Telegraf) {
    this.telegraf = telegraf;

    this.telegraf.hears(this.gameMenuCategories, async (ctx) => {
      const category = ctx.match.input;
      const gameCategory = await this.gameRepository.fetchContentFromGameBase(
        category
      );

      const msg = `Você selecionou a categoria ${category}.\n Esse link pode ser compartilhado com amigos: \n${gameCategory}`;

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
