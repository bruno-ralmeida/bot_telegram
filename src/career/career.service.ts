import { Injectable } from '@nestjs/common';
import { Context } from 'node:vm';
import { join } from 'path';
import { Markup, Telegraf } from 'telegraf';
import { CareerRepositoryService } from '../repository/career/careerRepository.service';

@Injectable()
export class CareerService {
  private readonly linksRepository = new CareerRepositoryService();
  private readonly careerMenuCategories: string[] = [
    '01 Back-End',
    '02 Front-End',
    '03 DevOps',
    '04 Mobile',
  ];
  constructor(private readonly telegraf: Telegraf) {
    this.telegraf = telegraf;

    this.telegraf.hears(this.careerMenuCategories, async (ctx) => {
      const category = ctx.match.input;
      const roadmap = await this.linksRepository.fetchContentFromCareerBase(
        category
      );

      const msg = `Você selecionou a categoria ${category}.\n\n${roadmap.text}`;

      ctx.reply(msg, Markup.keyboard(['/voltar']));
    });
  }

  async showRoadmap(ctx: Context) {
    await ctx.replyWithSticker({
      source: join(__dirname, '..', '..', './public/images/sophia-white.png'),
    });
    return await ctx.reply(
      'Selecione uma categoria:',
      Markup.keyboard(this.careerMenuCategories).resize()
    );
  }
}
