import FullScreen from "./components/FullScreen";
import Navigation from "./components/Navigation";
import {Clock} from "./components/Clock";
import Sound from "./components/Sound";


const body = document.getElementsByTagName("body")[0];
const newLine = () => body.appendChild(document.createElement("hr"));

/*** FullScreen Component ***/

const fullscreenButton = document.createElement("button") as HTMLButtonElement;
body.appendChild(fullscreenButton);

fullscreenButton.innerText = "Enter Fullscreen";

let exitFullScreen = () => {
    fullscreenButton.innerText = "Enter Fullscreen";
    FullScreen.close();
    fullscreenButton.onclick = enterFullScreen;
};

let enterFullScreen = () => {
    FullScreen.open(body);
    fullscreenButton.innerText = "Exist";
    fullscreenButton.onclick = exitFullScreen;
};

fullscreenButton.onclick = enterFullScreen;
newLine();

/*** Navigation Component ***/
const navigationButton = document.createElement("button") as HTMLButtonElement;
body.appendChild(navigationButton);

navigationButton.innerText = "Navigate to Google";

navigationButton.onclick = ( )=> {
    Navigation.openLink("http://www.google.com");
};
newLine();

/*** Clock ***/
const clockButton = document.createElement("button") as HTMLButtonElement;
body.appendChild(clockButton);
const clock = new Clock();
clockButton.innerText = clock.getTime();

window.setInterval(
    () => {
        clockButton.innerText = clock.getTime();
    },
    1000
);
newLine();

/*** Sound ***/
const soundButton = document.createElement("button") as HTMLButtonElement;
body.appendChild(soundButton);

const onSound = () => {
    Sound.enable();
    soundButton.innerText = "Sound Off";
    soundButton.onclick = offSound;
};

const offSound = () => {
    Sound.disable();
    soundButton.innerText = "Sound On";
    soundButton.onclick = onSound;
};

offSound();

newLine();