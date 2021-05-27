import { Injectable } from '@nestjs/common';
import { Context } from 'node:vm';
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
    '05 UI/UX',
  ];
  constructor(private readonly telegraf: Telegraf) {
    this.telegraf = telegraf;

    this.telegraf.hears(this.careerMenuCategories, async (ctx) => {
      const category = ctx.match.input;
      const roadmap = await this.linksRepository.fetchContentFromCareerBase(
        category
      );

      const msg = `Você selecionou a categoria ${category}. \n${roadmap.text}`;

      ctx.reply(msg, Markup.keyboard(['/voltar']));
    });
  }

  async showRoadmap(ctx: Context) {
    return await ctx.reply(
      'Selecione uma categoria:',
      Markup.keyboard(this.careerMenuCategories).resize()
    );
  }
}
