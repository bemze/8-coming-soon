class Toast {
    constructor() {
        this.selector = 'body';
        this.renderIntoParentDOM = document.querySelector(this.selector);
        this.DOM = null; //reprezentuoja pati naujai susigeneruota elementa
        this.textDOM = null;
        
    }
    /*parodysime, kur toast turi buti*/
    

    show(type, message) {
        this.DOM.classList.add('visible');
        this.textDOM.innerText= message;

        if (type === 'success') {
            this.DOM.classList.remove('error');
        }
        if (type === 'error') {
            this.DOM.classList.add('error');
        }
    }
    hide() {
        this.DOM.classList.remove('visible');
    }


    /* sis metodas sukurs HTML elementa, nes siuo metu niekur nera aprasytas toast HTM'e */
    render() {
        const HTML = `<div class="toast">
                        <i class="fa fa-check"></i>
                        <i class="fa fa-shield"></i>
                        <p>Your message here...</p>
                        <i class="fa fa-times"></i>
                    </div>`;
                    /*geresnis variantas uz this.DOM.innerHTML += HTML, nes innerDOM perraso visa HTML ir nusimusa dalykai*/
        this.renderIntoParentDOM.insertAdjacentHTML("beforeend", HTML);
        this.DOM = this.renderIntoParentDOM.querySelector('.toast');
        this.textDOM = this.DOM.querySelector('p');

    }
}

export { Toast }