// Az előző megoldás működik, viszont nincs egységbe zárva
// Kell: encapsulation (egységbe zárás, nem lehet kívülről hozzáférni a belső működéshez)
// Megoldás: Custom tag és template + sahdow dom
// Egészítsük ki <cascade-select> taggel és <template>-tel

class CascadeSelect extends HTMLElement {
    data = {};
    select = null;
    select1 = null;
    select2 = null;

    constructor() {
        super(); // A leszármaztatott HTMLElement class konstruktorának meghívása
        
        // A template-et kiszedjük és készítünk belőle egy deep copy-t, majd ezt a shadow dom-hoz csatoljuk
        // Így nem kell megírnunk a rengeteg createElement-et.
        // Kiszedjük a template-et
        const template = document.querySelector('#cascade-select-template');
        // Lemásoljuk a template-et, true: deep copy
        const content = template.content.cloneNode(true);
        // console.log(this);
        // A lemásolt template-et hozzácsatoljuk a shadow dom-hoz.
        // open: A shadow dom-hoz hozzáférhetünk a fő oldal kontextusából az Element.shadowRoot adattagon keresztül.
        // closed: A shadow dom teljesen el van rejtve, kívülről nem hozzáférhető. Az Element.shadowRoot null-lal tér vissza.
        const shadowRoot = this.attachShadow({ mode: 'open' });
        // console.log(shadowRoot);
        shadowRoot.appendChild(content);
        
        this.select = document.querySelector('select[name=pets]');
        this.select1 = this.shadowRoot.querySelector('select:nth-child(2)');
        this.select2 = this.shadowRoot.querySelector('select:nth-child(3)');
        
        // Szedjük ki az összes állatot
        this.collectData();
        // console.log(this.data);
        
        this.initSelect();

        // Az onChange függvényben a "this" kontextusának beállítása
        // Próbáld ki ezzel és kikommentelve is (logold ki a this-t az onChange függvényben)
        this.onChange = this.onChange.bind(this);
        this.select1.addEventListener('change', this.onChange);

        // Az eredeti elrejtett selectet szinkronban tartjuk ha a select2 megváltozik.
        // Kicseréljük az eredeti select value-ját, így fog működni a form elküldés esetén.
        // Erre azért van szükség, mert a light DOM-ban lévő form nem lát be a shadow DOM-ba!
        this.select2.addEventListener('change', e => {
            this.select.value = e.target.value;
        })

        // Az oldal betöltésekor töltsük fel a két select-et.
        // Szimuláljunk egy change event hívást a select1-en.
        this.select1.dispatchEvent(new Event('change'));
    }

    // Az adatstruktúra feltöltése
    collectData() {
        this.select.querySelectorAll('optgroup').forEach(optg => {
            const key = optg.label;
            const value = Array.from(optg.querySelectorAll('option')).map(o => ({
                value: o.value,
                text: o.text,
            }));
            this.data[key] = value;
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

    // A select1 változása esetén módosuljanak a select2 lehetőségei
    onChange(e) {
        // console.log(this);
        const label = e.target.value;
        this.populate(label);
        // Erre azért van szükség, hogy szinkronban tartsuk a light DOM-ban
        // lévő select-et a shadow DOM-ban lévővel. ld.: 47. sor
        this.select2.dispatchEvent(new Event('change'));
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

// A cascade-select tag és a CascadeSelect class "összekötése"
customElements.define('cascade-select', CascadeSelect);
