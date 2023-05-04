'use strict'

function myMap(func, arrayIn) {
    const arrayOut = [];
    for (let i=0; i<arrayIn.length; i++) {
        arrayOut[i] = func(arrayIn[i]);
    }
    return arrayOut;
}

function cube(x) {
    return x * x * x;
}

let arr1 = [1, 2, 3, 4, 5, 6];
console.log(myMap(cube, arr1));

// exporting for import within other files
module.export.myMap = myMap;
module.export.cube = cube
