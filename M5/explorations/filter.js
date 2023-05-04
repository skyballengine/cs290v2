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

function check(val) {
    return (val > 2)? true: false;
}

console.log(myFilter(check, [1, 2, 3, 4, 5]));