import { Injectable } from '@nestjs/common';

import data, { GameFormat } from './game';

@Injectable()
export class GameRepositoryService {
  private readonly base = data;
  fetchContentFromGameBase(category: string): GameFormat {
    return this.base.find((item) => item.category.includes(category));
  }
}
