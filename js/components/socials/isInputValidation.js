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