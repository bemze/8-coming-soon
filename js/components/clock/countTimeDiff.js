function countTimeDiff() {
    //einamieji metai (2020)
    const date = new Date();
    const currentYear = date.getFullYear();
    
    // naujakas = einamieji metai +1 (2020 + 1 = 2021)
    const newYear = currentYear +1;
    
    //susikonstruojam pilna data: ${naujakas} -01-01 00:00:00
    const newYearDate = `${newYear}-01-01 00:00:00`;
    const newYearObject = new Date(newYearDate);
    const newYearMiliseconds = newYearObject.getTime();
    
    //einamasis laikas yyyy-mm-dd dd:mm:ss
    const currentTimeMiliseconds = date.getTime()
    
    //suskaiciuojam laiko skirtuma
    const timeLeft = newYearMiliseconds - currentTimeMiliseconds;
    let secondsLeft = timeLeft / 1000;
    

    //is skirtumo apskaiciuojame likusias dienas/valandas/minutes/sekundes

    const days = Math.floor(secondsLeft / 60 / 60 / 24);
    //Panaudotos sekundes, kad sutrumpint formule
    secondsLeft -= days * 60 *60 * 24; 

    const hours = Math.floor(secondsLeft / 60 / 60);
    secondsLeft -= hours * 60 * 60;

    const minutes = Math.floor(secondsLeft / 60);
    

    const seconds = Math.floor(secondsLeft - minutes * 60 );
    
    
    
    
    return (days, hours, minutes, seconds);
}

export { countTimeDiff }