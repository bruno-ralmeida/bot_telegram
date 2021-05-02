import { Injectable } from '@nestjs/common';
import wiki from 'wikipedia';

@Injectable()
export class WikipediaService {
  wiki;

  constructor() {
    wiki.setLang('pt');
  }

  async fetchContentFromWikipedia(content) {
    try {
      const summary = await wiki.summary(content);
      return summary;
    } catch (error) {
      console.log(error);
    }
  }
}
