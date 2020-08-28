// Components
import clock from "./components/Clock";
import fonts from "./components/Fonts";
import fullscreen from "./components/FullScreen";
import sound from "./components/Sound";
import navigation from "./components/Navigation";
import i18n from "./components/i18n";


if(process.env.NODE_ENV !== "production") {
  require("./test");
}
