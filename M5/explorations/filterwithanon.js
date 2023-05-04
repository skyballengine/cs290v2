'use strict';

function myFilter(p, arrIn) {
    let arrOut = [];
    for (const element in arrIn) {
            if (p(element) === true) {
                arrOut.push(element);
            }
    }
    return arrOut;
}

let result = myFilter(x => x > 2, [1, 2, 3, 4, 5]);

console.log(result);
