function isValidSocialItem(itemObject) {
    if (typeof itemObject !== "object") {
        console.error("ERROR:social elemento klaida (turetu buti objektas) ");
        return false;
    }
    if (typeof itemObject.link !== "string" ||
    itemObject.link === "" ) {
        console.error("ERROR:social elemento nuorodo turetu buti tekstine ir ne tuscia");
        return false;
    }
    if (typeof itemObject.icon !== "string" || 
    itemObject.icon === "") {
        console.error("ERROR:social elemento ikona turetu buti tekstine ir ne tuscia ");
        return false;
    }
    return true;
}

export {isValidSocialItem}