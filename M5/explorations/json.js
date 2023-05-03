'use strict'

let s1 = {company: 'Anthill Farm', symbol: 'AHF', price: '139', rating: '9'};
const s1AsJSON = JSON.stringify(s1);
console.log(s1AsJSON);

const s1AsOBJ = JSON.parse(s1AsJSON);
console.log(s1AsOBJ);

const priceArray = [234.65, 10, 100002.90, 93]
console.log(priceArray);

const priceArrayAsJSON = JSON.stringify(priceArray);
console.log(priceArrayAsJSON);
console.log(typeof(priceArrayAsJSON));
console.log(typeof(s1AsJSON));

