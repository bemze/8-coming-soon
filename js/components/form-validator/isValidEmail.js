function isValidEmail(email) {
    
    if (typeof email !== 'string') {
        return "Negali buti tuscias laukelis";
    }
    // if (typeof email !== 'number') {
    //     return "Negali buti tik skaiciai";
    // }
    if (email === '') {
        return "Negali buti tuscias laukelis";
    }
    if (email.length > 50) {
        return "Negali buti daugiau nei 50 simboliu";
    }
    

    return true;
}

  export { isValidEmail }


