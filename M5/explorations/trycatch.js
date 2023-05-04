'use strict';

const invalidJSON = {name: "John Doe"};

try {
    let person = JSON.parse(invalidJSON);
    console.log(person);
} catch (err) {
    console.log(`Execution failed with exception ${err}`);
}