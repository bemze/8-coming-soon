/**
* renderSocial() funkcijai skirtu ivesties duomenu (input params) validacija
* @param {string} selector Selectorius, kaip rasti norima vieta, kur bus istatomas sugeneruotas kodas
* @param {Array} data Duomenu masyvas su objektais, kurie reprezentuoja social nuorodas
* @returns {boolean} Jei patikrinimo metu randama logine duomenu klaida, tai grazina `false`, priesingu atveju - `true`
*/
function isInputValidation(selector, data) {
    if (typeof selector !== 'string') {
        console.error('ERROR: selectorius turi buti testinio tipo');
        return false;
    }
    if (typeof selector === '') {
        console.error('ERROR: selectorius negali buti tuscias');
        return false;
    }
    if (!Array.isArray(data)) {
    console.error("Social icon reikia array tipo duomenu");
    return false;
    }
if (data.length === 0) {
    console.error('ERROR: ikonoms generuoti reikia ne tuscio array saraso' );
    return false;
    }   
    return true;
}

export { isInputValidation }