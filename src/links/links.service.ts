import { Injectable } from '@nestjs/common';
import { Context } from 'node:vm';
import { Markup, Telegraf } from 'telegraf';
import { LinksRepositoryService } from '../repository/links/linksRepository.service';

@Injectable()
export class LinksService {
  private readonly linksRepository = new LinksRepositoryService();
  private readonly linksMenuCategories: string[] = [
    'Videos',
    'Recursos Gratuitos',
    'Livros/Apostilas',
    'Ideias ou referencia de layout',
  ];

  constructor(private readonly telegraf: Telegraf) {
    this.telegraf = telegraf;

    this.telegraf.hears(this.linksMenuCategories, async (ctx) => {
      const category = ctx.match.input;
      const linksCategories = await this.linksRepository.fetchContentFromLinksBase(
        category
      );

      const links = linksCategories.map(
        (op) => `${op.description} - ${op.link}\n`
      );
      const msg = `Você selecionou a categoria ${category}. \n${links}`;

      ctx.reply(msg, Markup.keyboard(['/voltar']));
    });
  }

  async showLinks(ctx: Context) {
    return await ctx.reply(
      'Selecione uma categoria:',
      Markup.keyboard(this.linksMenuCategories).resize()
    );
  }
}
