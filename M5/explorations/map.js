'use strict';

// fix import statement once I learn how??
// import * as firstclass from './firstclassfunc.js';


function square(x) {
    return x * x;
}

const numbers = [23, 44, 15, 18];

console.log(numbers);

// Use the built-in method Array.map
const result = numbers.map(square);
console.log(result);
console.log(typeof result);


const myMap1 = new Map([
    [1, "one"],
    [2, "two"], 
    [3, "three"],
  ]);

const myMap2 = new Map([[1, 2], [3, 4], [5, 6]]);

console.log(myMap1);
console.log(myMap2);

let importedResult = myMap(cube, numbers);
console.log(importedResult);

