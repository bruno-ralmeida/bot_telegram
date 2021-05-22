import { Injectable } from '@nestjs/common';

import data from './game';

@Injectable()
export class GameRepositoryService {
  fetchContentFromGameBase(category: string) {
    const result = data.filter((d) => d.category == category);
    return result;
  }

  selectAllCategories() {
    return data;
  }
}
