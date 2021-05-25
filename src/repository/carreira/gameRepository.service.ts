import { Injectable } from '@nestjs/common';

import data from './game';

@Injectable()
export class GameRepositoryService {
  private readonly base = data;
  fetchContentFromGameBase(category: string) {
    const result = this.base.find((item) => item.category.includes(category));
    return result;
  }
}
