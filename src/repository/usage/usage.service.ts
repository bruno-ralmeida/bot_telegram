import data from './usage';

export class UsageService {
  private readonly base = data;

  fetchContentFromUsageBase(content: string): string {
    const result = this.base.find((item) =>
      item.key.toLowerCase().includes(content),
    );
    return result.value;
  }
}
