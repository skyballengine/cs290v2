'use strict';

let x = 5;

/**
 * The function isDivisibleBy returns a closure.
 * @returns 
 */
function isDivisibleBy() {
    /**
     * isDivisibleByX takes one parameter. However, its code uses the variable x 
     * which is neither a parameter nor a local variable. Hence, it is a closure.
     * @param {number} z 
     * @returns 
     */
    function isDivisibleByX(z) {
        return z % x === 0;
    }
    return isDivisibleByX;
}

// We assign isDivisibleByX to the variable f
const f = isDivisibleBy();
// Value of x is 5, , so value of x in isDivisibleByX is also 5
console.log(f(10)); // returns true
console.log(f(14)); // returns false

// When we change the value of x outside isDivisibleByA to 7, 
// the value of x inside the function also changes to 7
x = 7;

// x in isDivisibleByX is now 7
console.log(f(10)); // returns false
console.log(f(14)); // returns true
