import firebase from "firebase";
const firebaseApp = firebase.initializeApp({

    apiKey: "AIzaSyBaYFpAaMmNm8Zs43Hb1tnyyng9jxkDTYA",
    authDomain: "messenger-clone-8131a.firebaseapp.com",
    databaseURL: "https://messenger-clone-8131a.firebaseio.com",
    projectId: "messenger-clone-8131a",
    storageBucket: "messenger-clone-8131a.appspot.com",
    messagingSenderId: "278595757544",
    appId: "1:278595757544:web:f0a6c9555460b75cb8f05d",
    measurementId: "G-Q1RGD1HHF4"

});
const db = firebaseApp.firestore();

export default db 