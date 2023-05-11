'use strict';

const PORT = 3000;
const express = require("express");
const app = express();
app.use(express.static('public'));

const items = ['MongoDB', 'Express', 'React', 'Node'];

// Decrease the value of count to make the wait shorter, increase it to make it longer
const count = 1500;

/**
 * Do busy work so that the function takes a long time to execute.
 */
function doLongOp(index) {
    for (let i = 0; i < count; i++) {
        for (let j = 0; j < count; j++) {
            for (let k = 0; k < count; k++) {
                ;
            }
        }
    }
    return items[index];
}

/**
 * Handler for GET requests for /longop
 */
app.get('/longop', (req, res) => {
    console.log(req.query);
    const retVal = doLongOp(req.query.index);
    console.log(retVal);
    res.send(retVal);
});

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}...`);
});