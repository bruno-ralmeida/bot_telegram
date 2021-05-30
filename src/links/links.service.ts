import { Injectable } from '@nestjs/common';
import { Context } from 'node:vm';
import { join } from 'path';
import { Markup, Telegraf } from 'telegraf';
import { LinksRepositoryService } from '../repository/links/linksRepository.service';

@Injectable()
export class LinksService {
  private readonly linksRepository = new LinksRepositoryService();
  private readonly linksMenuCategories: string[] = [
    'Videos',
    'Cursos',
    'Recursos Gratuitos',
    'Livros/Apostilas',
    'Ideias para APP/Referência de Layout',
  ];

  constructor(private readonly telegraf: Telegraf) {
    this.telegraf = telegraf;

    this.telegraf.hears(this.linksMenuCategories, async (ctx) => {
      const category = ctx.match.input;
      const linksCategories = await this.linksRepository.fetchContentFromLinksBase(
        category
      );

      const links = linksCategories.map(
        (op) => `${op.description}: \n ${op.link}\n\n`
      );
      const msg = `Você selecionou a categoria: ${category}. \n\n${links.join(
        '\n'
      )}`;

      ctx.reply(msg, Markup.keyboard(['/voltar']));
    });
  }

  async showLinks(ctx: Context) {
    await ctx.replyWithSticker({
      source: join(__dirname, '..', '..', './public/images/sophia-blue.png'),
    });
    return await ctx.reply(
      'Selecione uma categoria:',
      Markup.keyboard(this.linksMenuCategories).resize()
    );
  }
}
