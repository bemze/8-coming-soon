/**
 * Footeryje esantys metais, visada lygus einamiesiems metams
 */
function footerRender() {
    let currentYear = new Date().getFullYear();
    const footerDOM = document.querySelector('.text-trio > .text:nth-of-type(1)');
    if (!footerDOM) {
        console.error("Netinkama vieta HTML");
        return false;
    }
    let HTML = `<div class="text">Copyright &copy; ${currentYear} <a href="#">Matrox</a></div>`;
    
    footerDOM.innerHTML = HTML;  
};

export { footerRender }