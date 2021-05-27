import { Injectable } from '@nestjs/common';

import data, { carrerFormat } from './career';

@Injectable()
export class CareerRepositoryService {
  private readonly base = data;
  fetchContentFromCareerBase(category: string): carrerFormat {
    return this.base.find((item) =>
      item.category.includes(category.replace(/([\s\d])/g, ''))
    );
  }
}
