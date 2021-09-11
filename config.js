import firebase from "firebase/app";
import "firebase/database";
require('firebase/auth')
const firebaseConfig = {
  apiKey: "AIzaSyDzCdzZeBkeLW3Fa_MT5BS2hxqbhIZHB_w",
  authDomain: "smartfeed-d23d4.firebaseapp.com",
  databaseURL: "https://smartfeed-d23d4-default-rtdb.firebaseio.com",
  projectId: "smartfeed-d23d4",
  storageBucket: "smartfeed-d23d4.appspot.com",
  messagingSenderId: "1088750616705",
  appId: "1:1088750616705:web:b78e59829de76b0bdb8d80",
  measurementId: "G-BJ9DQ1C3XT"
};

firebase.initializeApp(firebaseConfig);

export { firebase };