function isValidSingleProgressBar(progresBar) {
    if (typeof progresBar !== "object") {
        console.error("Error: turi buti objektas");
        return false;  
}
    if (!progresBar.selector ||
         typeof progresBar.selector !== "string" ||
          typeof progresBar.selector ==="") {
    console.error("Error: selektorius turi buti ne tuscias tekstas");
        return false;
}
    if (!progresBar.title ||
        typeof progresBar.title !== "string" ||
        typeof progresBar.title ==="") {
    console.error("Error: selektorius turi buti ne tuscias tekstas");
    return false;
}
    if (!progresBar.value ||
        typeof progresBar.value !== "number" ||
        typeof progresBar.value < 0 ||
        progresBar.value > 100 ||
        progresBar.value % 1 !== 0) {
    console.error("Error: value parametras turi buti nuo 0 iki 100 intervale");
    return false;
}

return true;
}

export {isValidSingleProgressBar }