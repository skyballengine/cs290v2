const express = require("express");
const app = express();
const PORT = 3000;

app.use(express.urlencoded({
    extended: true
}));

app.use(express.static('public'));

const someShapes = require('./shapes.js').shapes;

// Define a function to pass in the form input name for the product. 
// If it exists, then return that row for use when the function is called:
function CompareShapeData(choice) {
  for (const oneItem of someShapes) {
      if (oneItem.item === choice) {
          return oneItem;
      }
  }
}

// Define a route to handle the form data input 
// using the comparison function:
app.post('/chosen', (req, res) => {

  // Define a variable to access the user's choice 
  // based on comparison function:
  const __ = functionName(req.body.__);

  
  // Use the new variable to access the 
  // item, color, and size parameters:
  res.send(`
    <h2>Confirmation</h2>
    <p>You chose the ${__},  
       which has the color ${__} and 
       and is size ${__}.
    </p>
    `)
});

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}...`);
});

