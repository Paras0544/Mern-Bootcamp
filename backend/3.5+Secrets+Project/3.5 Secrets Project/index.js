//To see how the final website should work, run "node solution.js".
//Make sure you have installed all the dependencies with "npm i".
//The password is ILoveProgramming

import express from 'express';
import bodyParser from 'body-parser';
import { dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;

var secretPassword = "ILoveProgramming";

app.use(bodyParser.urlencoded({ extended: true }));

function passwordChecker(req, res, next) {
    const password = req.body["password"];
    if (password === secretPassword) {
        next();
    } else {
        res.send("<h1>Incorrect Password! Access Denied.🚫</h1>");
    }
}

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/index.html");
});

app.post("/submit", passwordChecker, (req, res) => {
    const street = req.body["street"];
    const pet = req.body["pet"];
    const bandName = street + pet;
    res.send(`<h1>Your secret band name is:</h1><h2>${bandName}✌️</h2>`);
});

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});
