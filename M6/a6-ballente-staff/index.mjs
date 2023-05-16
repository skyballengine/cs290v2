'use strict';

// import express module, create express object app, and create PORT constant for listening
import 'dotenv/config';
import express from 'express';
import asyncHandler from 'express-async-handler';
import fetch from 'node-fetch';
import { products as orderProducts } from './products.js'

const PORT = process.env.PORT;

const app = express();

//  supports url encoding
app.use(express.urlencoded({
    extended: true
}));

// includes 'public' folder as static folder
app.use(express.static('public'));

// app listens to PORT for requests
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}...`);
});

// Define global variables for the top and bottom HTML needed
let htmlTop = `
<!DOCTYPE html>
<html>
    <head>
        <meta charset='utf-8'>
        <meta http-equiv='X-UA-Compatible' content='IE=edge'>
        <title>Eusebius Ballentine</title>
        <meta name='viewport' content='width=device-width, initial-scale=1'>
        <meta name="robots" content="noindex">
        <link rel='stylesheet' type='text/css' media='screen' href='main.css'>
        <script src='main.js'></script>
    </head>
    <body>
        <header>
            <h1>
                Eusebius Ballentine
            </h1>
        </header>
        <nav>
            <a href="index.html">Home</a>
            <a href="contact.html">Contact</a>
            <a href="gallery.html">Gallery</a>
            <a href="order.html">Order</a>
        </nav>
        <main style="padding: 4%;">
            `;

let htmlBottom = `
        </main>
        <footer>
            <p>
                &#169 Skyballengine 2023
            </p>
        </footer>
    </body>
</html>
`;

// app route for sending contact form
app.post("/contact.html", (req, res) => {
    const formPerson = req.body.name;
    const formMessage = req.body.textarea;
    const formSelection = req.body.selections;
    const formSatisfaction = req.body.planting;
    const formEmailAdd = req.body.checkbox;
  
    res.send(htmlTop + `
        <h3>Hello, ${formPerson}!</h3>
        <p>Your message is the following: ${formMessage}</p>
        <p>Will you be visiting us again?: ${formSelection}</p>
        <p>Your experience was satisfying: ${formSatisfaction}</p>
        <p>Will you be added to our email list?: ${formEmailAdd}</p>
    ` + htmlBottom)
})

// utility function for getting a product from orderProducts
function getProduct(product) {
    for (const company of orderProducts) {
        if (product === company.product) {
            return company;
        } 
    }
}

// route for placing an order
app.post("/order.html", (req, res) => {
    const formPerson = req.body.name;
    const formAddress = req.body.address;
    const formItem = req.body.item;
    const formQuantity = req.body.quantity;
    const formDeliveryInstructions = req.body.delivery;
    const formTotalPrice = getProduct(formItem).price * formQuantity;

    res.send(htmlTop + `
        <h3>Hello, ${formPerson}!</h3>
        <p>Your address is: ${formAddress}</p>
        <p>The item you have ordered is: ${formItem}</p>
        <p>Quantity: ${formQuantity}</p>
        <p>Total price: ${formTotalPrice.toLocaleString('en-US', {     
            style: 'currency',     
            currency: 'USD',     
            currencyDisplay: 'symbol'
            })}</p>
        <p>Your delivery instructions are: ${formDeliveryInstructions}</p>
    ` + htmlBottom)
})

let countToTen = 1;
let countEveryTen = 0;
app.use("/random-person", (req, res, next) => {
    if (countToTen % 10 == 0) {
        countEveryTen += 1;
        console.log(`You are receiving the tenth call #${countEveryTen}`);
        countToTen += 1;
    } else {
        console.log(`Call #${countToTen}`);
        countToTen += 1;
    }
    next();

})
// route for browser calls to random person api
app.get("/random-person", asyncHandler(async(req, res) => {
    const response = await fetch('https://randomuser.me/api/');
    const data = await response.json();
    res.send(data);
    
}))

// error handling for above route
app.use((err, req, res, next) => {
    console.log(err.stack)
    res.status(500).send(`<h2>Wait</h2><p>Something is amiss, please try again</p>`)
})





