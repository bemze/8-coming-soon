import {renderSocials} from "./components/socials/renderSocials.js";
import {socials} from "./data/socialsData.js";
import { renderClock} from "./components/clock/renderClock.js";

import { renderAllProgressBars } from "./components/progress-bar/renderAllProgressBars.js";
import { progressBarDate } from "./data/progressBarData.js";



renderAllProgressBars(progressBarDate);

renderSocials('footer > .row', socials);

renderClock('.clock');




// renderProgressBar("WEB", 90);
// renderProgressBar('design', 70);
// renderProgressBar('UX', 40);













// // DUOMENYS
// const a = 10;
// const b = 100;




// // LOGIKA
// function sum(a, b) {
//     return a + b;
// }



// // APJUNGIMAS

// console.log(sum(a, b));