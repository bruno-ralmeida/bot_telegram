import { Injectable } from '@nestjs/common';
import wiki from 'wikipedia';

@Injectable()
export class WikipediaService {
  wiki;

  constructor() {
    wiki.setLang('pt');
  }

  fetchContentFromWikipedia(content) {
    try {
      const summary = wiki.summary(content);
      return summary;
    } catch (error) {
      console.log(error);
    }
  }
}
