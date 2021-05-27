import { Injectable } from '@nestjs/common';

import data from './game';

@Injectable()
export class GameRepositoryService {
  private readonly base = data;
  fetchContentFromGameBase(category: string) {
    const itemSearch = this.base.find((item) =>
      item.category.includes(category)
    );
    let result = '';

    typeof itemSearch !== 'undefined'
      ? (result = `${itemSearch.category} - ${itemSearch.quizLink}`)
      : (result = 'Desculpe, não consegui entender.');

    return result;
  }
}
