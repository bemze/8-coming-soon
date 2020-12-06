function isValidText(text) {
    if (typeof text !== 'string') {
        return "Tekstas turi buti teksto tipo";
    }
    if ( text === '') {
        return "Negali buti tuscias teksto laukelis";
    }
    if (text.length > 50) {
        return 'Vardas per ilgas';
    }
    return true;
}

export { isValidText }