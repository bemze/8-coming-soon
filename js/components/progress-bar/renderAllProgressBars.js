import { renderProgressBar } from "./renderProgressBar.js";
import { isValidSingleProgressBar } from "./isValidSingleProgressBar.js";
import { isValidProgressBarsList } from './isValidProgressBarsList.js';

/**
 * 
 * @param {object} data 
 * @param {string} data[].selector CSS like selectorius, kaip rasti vieta, kur sugeneruoti turini
 * @param {string} data[].title Progress bar pavadinimas
 * @param {string} data[].value Progress bar reiksme procentais
 * @returns {boolean}  Funkcijai tinkamai suveikus grazinamas `true`, priesingu atveju - `false`
 */
function renderAllProgressBars(data) {
    if (!isValidProgressBarsList(data)) {
        return false;
    }

    for (let i = 0; i < data.length; i++) {
        const bar = data[i];

        if (!isValidSingleProgressBar(bar)) {
            continue;
        }
        renderProgressBar(bar.selector, bar.title, bar.value);

    }

}

export { renderAllProgressBars }