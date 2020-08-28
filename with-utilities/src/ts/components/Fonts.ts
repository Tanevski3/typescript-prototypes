import WebFont = require("webfontloader");

export default {
  async loadWebFont(family: string): Promise<void> {
    return WebFont.load({
      google: {
        families: [family]
      }
    });
  }
};
