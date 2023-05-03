'use strict'

const orcl = { company: 'Oracle', symbol: 'ORCL', price: 67.08 };

for (const key in orcl){
  console.log(key + ': ' + orcl[key]);
}

for (let x of Object.keys(orcl)) {
    console.log(x + ": " + orcl[x]);
}