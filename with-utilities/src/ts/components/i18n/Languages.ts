export default class LanguageManager {
  private readonly available: string[];
  private current: string | any;

  constructor(currentLanguageCode: string, languageCodes: string[]) {
    this.available = languageCodes;
    this.setLanguage(currentLanguageCode);
  }

  setLanguage(languageCode: string) {
    if (this.available.indexOf(languageCode) === -1) {
      throw new Error("Can not se language that is not avalable");
    }
    this.current = languageCode;
  }
}
