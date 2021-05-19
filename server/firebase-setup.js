var firebase = require("firebase/app");
const config = {
  apiKey: process.env.API_KEY,
  authDomain: process.env.AUTH_DOMAIN,
  databaseURL: process.env.DATABASE_URL,
  projectId: "disaster-call",
  storageBucket: "disaster-call.appspot.com",
  messagingSenderId: process.env.MESSAGE_SEND_ID,
  appId: process.env.APP_ID,
};
firebase.initializeApp(config);
require("firebase/database");

const database = firebase.database().ref("random-state-1");
console.log("🚀 ~ file: firebase-setup.js ~ line 18 ~ database", database);

module.exports = { database };
