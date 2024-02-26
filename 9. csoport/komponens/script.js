/**
 * Adatstruktúra
 *
 * {
 *     "optgroup1": [
 *         {
 *             "value": "optvalue1",
 *             "text": "opttext1"
 *         },
 *         {
 *             "value": "optvalue2",
 *             "text": "opttext2"
 *         }
 *     ],
 *     "optgroup2": [
 *         {
 *             "value": "optvalue3",
 *             "text": "opttext3"
 *         },
 *         {
 *             "value": "optvalue4",
 *             "text": "opttext4"
 *         }
 *     ]
 * }
 *
 */

const select = document.querySelector('select[name=pets]');
select.hidden = true;
select.removeAttribute('name');
const data = {};

select.querySelectorAll('optgroup').forEach(optg => {
    const key = optg.label;
    const values = Array.from(optg.querySelectorAll('option')).map(o => ({
        value: o.value,
        text: o.text,
    }));
    // console.log(value);
    data[key] = values;
});
// console.log(data);

// 1. select
const select1 = document.createElement('select');
Object.keys(data).forEach(label => {
    const option = document.createElement('option');
    option.text = label;
    select1.appendChild(option);
});
select.parentElement.appendChild(select1);

// 2. select
const select2 = document.createElement('select');
select2.setAttribute('name', 'pets');
select.parentElement.appendChild(select2);

select1.addEventListener('change', function (e) {
    // console.log(e.target.value);
    populate(this.value);
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
