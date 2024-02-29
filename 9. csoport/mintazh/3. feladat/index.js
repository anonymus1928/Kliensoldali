class PhoneNumber extends HTMLElement {
    constructor() {
        super();
        this.template = this.querySelector('#phone-number-template');
        this.attachShadow({ mode: 'open' });

        this.getBootstrap();

        this.generateButtons();
    }

    getBootstrap() {
        const style = document.createElement('style');
        style.innerHTML =
            '@import url("https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/css/bootstrap.min.css");';
        this.shadowRoot.appendChild(style);
    }

    generateButtons() {
        ['Mobil', 'Vezetékes'].forEach(num => {
            const numButton = document.createElement('button');
            numButton.classList.add('btn', 'btn-primary', 'm-2');
            numButton.id = num;
            numButton.innerHTML = num;

            numButton.addEventListener('click', e => {
                e.target.disabled = true;
                this.generateInputs(num);
            });

            this.shadowRoot.appendChild(numButton);
        });
    }

    generateInputs(num) {
        const options = {
            mobile: ['0620', '0630', '0650', '0660', '0670'],
            landline: ['061', '0622', '0623', '0674', '0675'],
        };

        const temp = this.template.content.cloneNode(true);
        temp.querySelector('h5').innerHTML = num;
        const select = temp.querySelector('select');

        if (num === 'Mobil') {
            options.mobile.forEach(n => {
                const o = document.createElement('option');
                o.text = n;
                o.value = n;
                select.appendChild(o);
            });
        } else if (num === 'Vezetékes') {
            options.landline.forEach(n => {
                const o = document.createElement('option');
                o.text = n;
                o.value = n;
                select.appendChild(o);
            });
        }

        temp.querySelector('button').addEventListener('click', e => {
            e.target.closest('.row').remove();
            this.shadowRoot.querySelector(`#${num}`).disabled = false;
        });

        this.shadowRoot.appendChild(temp);
    }
}

customElements.define('phone-number', PhoneNumber);
