import { Injectable } from '@nestjs/common';
import wiki from 'wikipedia';

@Injectable()
export class WikipediaService {
  wiki;

  constructor() {
    wiki.setLang('pt');
  }

  fetchContentFromWikipedia(content: string) {
    return wiki.summary(content.replace('#', 'sharp'));
  }
}
