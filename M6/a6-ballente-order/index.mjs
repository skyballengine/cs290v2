'use strict';

// import express module, create express object app, and create PORT constant for listening
import 'dotenv/config';
import express from 'express';
import asyncHandler from 'express-async-handler';
import fetch from 'node-fetch';
import { products as orderProducts } from './products.js'


const app = express();
const PORT = process.env.PORT;

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

    // const nodemailer = require("nodemailer");

    // // async..await is not allowed in global scope, must use a wrapper
    // async function main() {
    // // Generate test SMTP service account from ethereal.email
    // // Only needed if you don't have a real mail account for testing
    // let testAccount = await nodemailer.createTestAccount();

    // // create reusable transporter object using the default SMTP transport
    // let transporter = nodemailer.createTransport({
    //     host: "smtp.ethereal.email",
    //     port: 587,
    //     secure: false, // true for 465, false for other ports
    //     auth: {
    //     user: testAccount.user, // generated ethereal user
    //     pass: testAccount.pass, // generated ethereal password
    //     },
    // });

    // // send mail with defined transport object
    // let info = await transporter.sendMail({
    //     from: '"Sky Ballentine" <skyballentine@gmail.com>', // sender address
    //     to: "skyballentine@gmail.com", // list of receivers
    //     subject: "Hello ✔", // Subject line
    //     text: "Hello world?", // plain text body
    //     html: htmlTop + `
    //     <h3>Hello, ${formPerson}!</h3>
    //     <p>Your message is the following: ${formMessage}</p>
    //     <p>Will you be visiting us again?: ${formSelection}</p>
    //     <p>Your experience was satisfying: ${formSatisfaction}</p>
    //     <p>Will you be added to our email list?: ${formEmailAdd}</p>
    // ` + htmlBottom
    // });

    // console.log("Message sent: %s", info.messageId);
    // // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

    // // Preview only available when sending through an Ethereal account
    // console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
    // // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
    // }

    // main().catch(console.error);
})

// variable for storing list of products
// const orderProducts = require('./products.js').products;

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

app.post("/staff", asyncHandler(async(req, res) => {
    try {
        const response = await fetch('https://randomuser.me/api/');
        const data = await response.json();
        res.send(data)
    } catch (error) {
        console.log(error);
        res.send('500 - Server Error')
    }
}))






