const firebase = require("firebase");
require("firebase/firestore");

const config = {
  apiKey: "AIzaSyCrvxG0KmEFbbfzH9Y-qh9CKHjKM_-0Rfk",
  authDomain: "seoul-revisioned.firebaseapp.com",
  databaseURL: "https://seoul-revisioned.firebaseio.com",
  projectId: "seoul-revisioned",
  storageBucket: "seoul-revisioned.appspot.com",
  messagingSenderId: "852784944923"
};

const FbApp = firebase.initializeApp(config);

export default FbApp;
