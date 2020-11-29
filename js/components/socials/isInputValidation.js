function isInputValidation(data) {
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