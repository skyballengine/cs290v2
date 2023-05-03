'use strict'

function hasProperty(obj, prop) {
    return Object.keys(obj).includes(prop);
};
let s1 = {company: 'Anthill Farm', symbol: 'AHF', price: '139', rating: '9'};
console.log(hasProperty(s1, "company"));