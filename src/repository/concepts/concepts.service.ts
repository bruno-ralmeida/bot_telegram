import data from './concepts';

export class ConceptsService {
  private readonly base = data;

  fetchContentFromConceptsBase(content: string) {
    const result = this.base.find(
      (item) => item.key.toLowerCase().includes(content) || '',
    );

    return result.value || '';
  }
}
