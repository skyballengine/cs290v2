'use strict'

const stockPrototype = {
    totalPrice: function (count) {
        return this.price * count;
    }
}

/**
 * 
 * @param {string} company 
 * @param {string} symbol 
 * @param {number} price 
 * @returns An object corresponding to the prototype stockPrototype with values of 
 *          properties company, symbol and price set to the arguments passed in
 */

function createStock(company, symbol, price) {
    const obj = { company, symbol, price };

    Object.setPrototypeOf(obj, stockPrototype);

    return obj;
}

let s1 = createStock("Anthill Farm", "AHF", 1234);
let s2 = createStock("Wild", "WLD", 2345);

console.log(s1.totalPrice(10));
console.log(s2.totalPrice(10));

console.log(Object.getPrototypeOf(s1));
console.log(Object.getPrototypeOf(s2));
