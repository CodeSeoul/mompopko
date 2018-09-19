const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const admin = require("firebase-admin");
let serviceAccount = require("./config/keys.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});
const database = admin.firestore();

// Disable deprecated features
database.settings({
  timestampsInSnapshots: true
});

database
  .collection("users")
  .add({
    first: "Aiden",
    last: "Jung",
    born: 1990
  })
  .then(data => {
    console.log(data.id);
  })
  .catch(err => console.log(err));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const PORT = process.env.port || 5000;

app.listen(PORT, () => console.log(`Server running on ${PORT}`));
