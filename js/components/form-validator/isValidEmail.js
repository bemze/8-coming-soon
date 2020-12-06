function isValidEmail(email) {
    if (typeof email !== 'string') {
        return false;
    }
    if (email === '') {
        return false;
    }
    if (email.length > 50) {
        return false;
    }
    
    return true;
}

export { isValidEmail }