'use strict';

const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.urlencoded({
    extended: true
}));

app.use(express.static('public'));

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

// app function using POST method and endpoint value that matches HTML form's action value
app.post("/contact.html", (req, res) => {
    const formPerson = req.body.name;
    const formMessage = req.body.textarea;
    const formSelection = req.body.selections;
    const formSatisfaction = req.body.planting;
    const formEmailAdd = req.body.checkbox;
    console.log(typeof(req.body.checkbox));
    // if (req.body.checkbox == "on") {
    //     let formEmailAdd = "Yes";
    // } else {
    //     let formEmailAdd = "No";
    // }
    res.send(htmlTop + `
        <h3>Hello, ${formPerson}!</h3>
        <p>Your message is the following: ${formMessage}</p>
        <p>Will you be visiting us again?: ${formSelection}</p>
        <p>Your experience was satisfying: ${formSatisfaction}</p>
        <p>Will you be added to our email list?: ${formEmailAdd}</p>
    ` + htmlBottom)

    const nodemailer = require("nodemailer");

    // async..await is not allowed in global scope, must use a wrapper
    async function main() {
    // Generate test SMTP service account from ethereal.email
    // Only needed if you don't have a real mail account for testing
    let testAccount = await nodemailer.createTestAccount();

    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
        host: "smtp.ethereal.email",
        port: 587,
        secure: false, // true for 465, false for other ports
        auth: {
        user: testAccount.user, // generated ethereal user
        pass: testAccount.pass, // generated ethereal password
        },
    });

    // send mail with defined transport object
    let info = await transporter.sendMail({
        from: '"Sky Ballentine" <skyballentine@gmail.com>', // sender address
        to: "skyballentine@gmail.com", // list of receivers
        subject: "Hello ✔", // Subject line
        text: "Hello world?", // plain text body
        html: htmlTop + `
        <h3>Hello, ${formPerson}!</h3>
        <p>Your message is the following: ${formMessage}</p>
        <p>Will you be visiting us again?: ${formSelection}</p>
        <p>Your experience was satisfying: ${formSatisfaction}</p>
        <p>Will you be added to our email list?: ${formEmailAdd}</p>
    ` + htmlBottom
    });

    console.log("Message sent: %s", info.messageId);
    // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

    // Preview only available when sending through an Ethereal account
    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
    // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
    }

    main().catch(console.error);
})






