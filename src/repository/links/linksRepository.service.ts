import { Injectable } from '@nestjs/common';

import data, { LinksFormat } from './links';

@Injectable()
export class LinksRepositoryService {
  private readonly base = data;
  fetchContentFromLinksBase(category: string): LinksFormat[] {
    return this.base.filter((item) => item.category == category);
  }
}
