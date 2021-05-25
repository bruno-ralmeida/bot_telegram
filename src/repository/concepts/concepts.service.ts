/* eslint-disable prettier/prettier */
import data from './concepts';

export class ConceptsService {
  private readonly base = data;

  fetchContentFromConceptsBase(content: string): string {
    const itemSearch = this.base.find((item) =>
      item.key
        .normalize('NFD')
        .replace(/([\u0300-\u036f]|[^\s-0-9a-zA-Z])/g, '')
        .toLowerCase()
        .includes(
          content
            .normalize('NFD')
            .replace(/([\u0300-\u036f]|[^\s-0-9a-zA-Z])/g, '')
        )
    );
    let result = '';

    typeof itemSearch !== 'undefined'
      ? (result = itemSearch.value)
      : (result = 'Desculpe, não consegui entender.');

    return result;
  }
}
