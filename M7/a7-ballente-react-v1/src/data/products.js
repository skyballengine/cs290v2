'use strict';

// Define a JavaScript object with arrays of products, their company names, and prices: 
const products = [
    { company: 'AGYM', product: 'Spinning Cat Scratcher Ball', price: 52.99 },
    { company: 'Jasonwell', product: 'Foldable Dog Pool', price: 27.25 },
    { company: 'Expawlorer', product: 'Dog Fence Window', price: 30.50 },
    { company: 'Lollimeow', product: 'Capsule Pet Travel Backpack', price: 59.00 },
    { company: 'Drool\'d', product: 'Cat Hamster Wheel', price: 349.75 }
];

// Allow exporting of the object to other functions:
module.exports.products = products;


// Display the object in a table in the terminal console to confirm it works:
// https://developer.mozilla.org/en-US/docs/Web/API/Console/table
console.table(products); 

 