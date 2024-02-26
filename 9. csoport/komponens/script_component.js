class CascadeSelect extends HTMLElement {
    data = {};
    select = null;
    select1 = null;
    select2 = null;

    constructor() {
        super();

        const template = document.querySelector('#cascade-select-template');
        const content = template.content.cloneNode(true);
        // console.log(this);

        const shadowRoot = this.attachShadow({ mode: 'open' });
        shadowRoot.appendChild(content);

        this.select = document.querySelector('select[name=pets]');
        this.select1 = this.shadowRoot.querySelector('select:nth-child(2)');
        this.select2 = this.shadowRoot.querySelector('select:nth-child(3)');
        // console.log(this.select, this.select1, this.select2);

        // Szedjük ki az adatokat
        this.collectData();

        // Init select1
        this.initSelect();

        this.onChange = this.onChange.bind(this);

        this.select1.addEventListener('change', this.onChange);

        this.select2.addEventListener('change', e => {
            this.select.value = e.target.value;
        });

        this.select1.dispatchEvent(new Event('change'));
    }

    // Az adatstruktúra feltöltése
    collectData() {
        this.select.querySelectorAll('optgroup').forEach(optg => {
            const key = optg.label;
            const values = Array.from(optg.querySelectorAll('option')).map(o => ({
                value: o.value,
                text: o.text,
            }));
            // console.log(value);
            this.data[key] = values;
        });
    }

    // A select1 feltöltése
    initSelect() {
        Object.keys(this.data).forEach(label => {
            const option = document.createElement('option');
            option.text = label;
            this.select1.appendChild(option);
        });
    }

    // A select1 változása esetén módosuljanak a select2 option-jei
    onChange(e) {
        console.log(this);
        this.populate(e.target.value);
        this.select2.dispatchEvent(new Event('change'));
        // const alma = () => {console.log(this)};
        // alma();
    }

    // A select2 feltöltése
    populate(label) {
        const values = this.data[label];
        this.select2.innerHTML = '';
        values.forEach(val => {
            const option = document.createElement('option');
            option.text = val.text;
            option.value = val.value;
            this.select2.appendChild(option);
        });
    }
}

customElements.define('cascade-select', CascadeSelect);
