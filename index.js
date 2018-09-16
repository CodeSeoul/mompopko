const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const firebase = require("firebase");
const firebaseConfig = require("./config/keys");

firebase.initializeApp(firebaseConfig);
const database = firebase.database();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const PORT = process.env.port || 5000;

app.listen(PORT, () => console.log(`Server running on ${PORT}`));
