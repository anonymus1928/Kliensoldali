const select = document.querySelector('select[name=pets]');
const data = {};
select.hidden = true;
select.removeAttribute('name');

/* Adatstruktúra
{
    "optgroup1": [
        {
            "value": "opt1value",
            "text": "opt1text"
        },
        {
            "value": "opt2value",
            "text": "opt2text"
        }
    ],
    "optgroup2": [
        {
            "value": "opt3value",
            "text": "opt3text"
        },
        {
            "value": "opt4value",
            "text": "opt4text"
        }
    ]
}
*/

select.querySelectorAll('optgroup').forEach(optg => {
    const key = optg.label;
    const value = Array.from(optg.querySelectorAll('option')).map(o => ({
        value: o.value,
        text: o.text,
    }));
    data[key] = value;
});

// console.log(data);

// Az első select elkészítése
const select1 = document.createElement('select');
Object.keys(data).forEach(label => {
    const option = document.createElement('option');
    option.text = label;
    select1.appendChild(option);
});
select.parentElement.appendChild(select1);

// A második select elkészítése
const select2 = document.createElement('select');
select2.setAttribute('name', 'pets');
select.parentElement.appendChild(select2);

select1.addEventListener('change', function (e) {
    const label = this.value;
    populate(label);
});

function populate(label) {
    const values = data[label];
    select2.innerHTML = '';
    values.forEach(val => {
        const option = document.createElement('option');
        option.text = val.text;
        option.value = val.value;
        select2.appendChild(option);
    });
}

select1.dispatchEvent(new Event('change'));
