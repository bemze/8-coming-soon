import { isInputValidation } from "./isInputValidation.js";
import { isValidSocialItem } from "./isValidSocialItem.js";


function renderSocials(data) {
    if (!isInputValidation(data)) {
        return false;
    }
    
    //logic 

    const socialsDOM = document.querySelector('footer > .row');
    let HTML = '';

    for (let i = 0; i < data.length; i++) {
        const item = data[i];
        if (!isValidSocialItem(item)) {
            continue;
        }
        
        HTML +=`<a href="${item.link}" target="_blank" class="fa fa-${item.icon}" aria-hidden="true"></a>`;
    }
        
    // post logic validation

        if (HTML === "") {
            console.error('ERROR: nepavyko sugeneruoti social ikonu/nuorodu');
            return false;
        }

    
    // console.log(socialsDOM);

    socialsDOM.innerHTML = HTML;
    return false;
}

export { renderSocials }