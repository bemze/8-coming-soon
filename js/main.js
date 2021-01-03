import {renderSocials} from "./components/socials/renderSocials.js";
import {socials} from "./data/socialsData.js";
import { renderClock} from "./components/clock/renderClock.js";

import { renderAllProgressBars } from "./components/progress-bar/renderAllProgressBars.js";
import { progressBarDate } from "./data/progressBarData.js";

import { formValidator } from "./components/form-validator/formValidator.js";
import { footerRender } from "./components/footer/footerRender.js";

import { Toast } from './components/toast/Toast.js';

renderAllProgressBars(progressBarDate);

renderSocials('footer > .row', socials);

renderClock('.clock');

const toast = new Toast();
toast.render();
// toast.show('success', 'Puiku!!!');
// toast.show('error', 'Cia yra klaida!!!');
// toast.hide('success', 'Puiku!!!');


formValidator('.hero .form', toast);
formValidator('main .form', toast);
footerRender('.text-trio > .text:nth-of-type(1)');

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