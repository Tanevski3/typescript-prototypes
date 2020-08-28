export default class Texts {
  private cache: Map<string, string> = new Map<string, string>();

  public setCache(cache: Map<string, string>) {
    this.cache = cache;
  }

  public get(key: string): string | undefined {
    // which excel file ?
    // which sheet/language code
    // get key for what language ?
    // 1. get text locally
    return this.cache.get(key);
  }

  getTextFromService(key) {
    return undefined;
  }
  // Each instance has texts (in different languages)
  // 1 Instance = 1 excel, Each Language in separate sheet
  // How to manage downloading ?
  // Get portions of texts ?
  // Get whole texts ?
  // download all texts in the beginning ?
}
