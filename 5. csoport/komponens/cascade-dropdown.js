const select = document.querySelector('select[name=pets]');
const data = {};
select.hidden = true;
select.removeAttribute('name');

/* Adatstruktúránk
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
