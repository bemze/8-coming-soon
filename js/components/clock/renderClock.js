import {countTimeDiff} from "./countTimeDiff.js"
//Target date New Evening 
//2021-01-01 00:00:00

/**
 * Generuoja statini laikrodi, kuris rodo, kiek liko laiko iki artimiausiu Naujuju metu
 * @param {string} selector CSS taisykle, kaip rasti vieta, kur bus generuojamas laikrodzio HTML turinys 
 * @returns {boolean} jei funkcija sekmingai vykdo funkcija - grazina `true`, priesingu atveju `false`
 */
function renderClock(selector) {
    if (typeof selector !== "string") {
        console.error('ERROR: selektorius turi buti tekstinio tipo')
        return false;
    }
    if (typeof selector === "") {
        console.error('ERROR: selektorius negali buti tuscias')
        return false;
    }
    const DOM = document.querySelector(selector);
    if (!DOM) { 
        console.error('Error: nerasta vieta, kur sugeneruoti laikrodzio HTML turini');
        return false;
    }
    // //einamieji metai (2020)
    // const date = new Date();
    // const currentYear = date.getFullYear();
    
    // // naujakas = einamieji metai +1 (2020 + 1 = 2021)
    // const newYear = currentYear +1;
    
    // //susikonstruojam pilna data: ${naujakas} -01-01 00:00:00
    // const newYearDate = `${newYear}-01-01 00:00:00`;
    // const newYearObject = new Date(newYearDate);
    // const newYearMiliseconds = newYearObject.getTime();
    
    // //einamasis laikas yyyy-mm-dd dd:mm:ss
    // const currentTimeMiliseconds = date.getTime()
    
    // //suskaiciuojam laiko skirtuma
    // const timeLeft = newYearMiliseconds - currentTimeMiliseconds;
    // let secondsLeft = timeLeft / 1000;
    

    // //is skirtumo apskaiciuojame likusias dienas/valandas/minutes/sekundes

    // const days = Math.floor(secondsLeft / 60 / 60 / 24);
    // //Panaudotos sekundes, kad sutrumpint formule
    // secondsLeft -= days * 60 *60 * 24; 

    // const hours = Math.floor(secondsLeft / 60 / 60);
    // secondsLeft -= hours * 60 * 60;

    // const minutes = Math.floor(secondsLeft / 60);
    

    // const seconds = Math.floor(secondsLeft - minutes * 60 );
    
    const time = countTimeDiff();
    
    const HTML = `<div class="time-box">
                    <div class="time">${time.days}</div>
                    <span>Days</span>
                </div> 
                <div class="time-box">
                    <div class="time">${time.hours}</div>
                    <span>Hours</span>
                </div>
                <div class="time-box">
                    <div class="time">${time.minutes}</div>
                    <span>Minutes</span>
                </div>
                <div class="time-box">
                    <div class="time">${time.seconds}</div>
                    <span>Seconds</span>
                </div>`;

    DOM.innerHTML = HTML;
    const timesDOM = DOM.querySelectorAll('.time');

//paleidziame laikrodzio mechanizma
    let timePassed = 0;
    
    setInterval(() => {
        const time = (countTimeDiff());
        timesDOM[0].innerText = time.days;
        timesDOM[1].innerText = time.hours;
        timesDOM[2].innerText = time.minutes;
        timesDOM[3].innerText = time.seconds;
    }, 1000);
    
    return true;
}






export { renderClock }