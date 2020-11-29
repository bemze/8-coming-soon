function renderSocials(data) {
    //input validation
    // if (!Array.isArray(data))
    
    
    //logic
    const socialsDOM = document.querySelector('footer > .row');
    let HTML = '';

    for (let i = 0; i < data.length; i++) {
        const item = data[i];
        if (typeof item !== 'object') {
            continue;
        }
        if (typeof item.link !== "string") {
            continue;
        }
        if (typeof item.icon !== "string" || 
        item.icon === '') {
            continue;
        }


      HTML +=`<a href="${item.link}" target="_blank" class="fa ${item.icon}" aria-hidden="true"></a>`;
    }
    
    // post logic validation
    if (HTML === '') {
        console.error("Error: nepavyko sugeneruoti nuotodu");
    }


    // return
    socialsDOM.innerHTML = HTML;
    
}

export { renderSocials }