function isValidName(name) {
    if (typeof name !== 'string') {
        return "Vardas turi buti teksto tipo";
    }
    if ( name === '') {
        return "Negali buti tuscias vardo laukelis";
    }
    if (name.length > 50) {
        return 'Vardas per ilgas';
    }
    
    //turi buti tik ABC raide
    const abc = 'zxcvbnmasdfghjklqwertyuiop';
    for (let letter of name) {
     
        if (!abc.includes(letter.toLowerCase())) {
            console.error("Error: varde panaudota netinkama raide");
            return `Varde panaudota netinkama raide (${letter}).`;
        }
    }
    // 1 raide didzioji, kitos mazosios
    if (name.toLowerCase() === name) {
        return "Vardas negali buti is mazuju raidziu"

    }
    //tik didziosios raides
    const realNameFormat = name[0].toUpperCase() + name.slice(1).toLowerCase();
    if (realNameFormat !== name) {
        return 'Vardas susidaro is pirmos raides didziosios, likusios mazosios';
    } 


    return true;
}

export { isValidName }