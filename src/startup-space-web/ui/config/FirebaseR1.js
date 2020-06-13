import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";


const firebaseConfig = {
    apiKey: "AIzaSyCFLtSjm-jwq4YfEyGMSu-j4EtdIJdZXB4",
    authDomain: "projeto-auth-5f30a.firebaseapp.com",
    databaseURL: "https://projeto-auth-5f30a.firebaseio.com",
    projectId: "projeto-auth-5f30a",
    storageBucket: "projeto-auth-5f30a.appspot.com",
    messagingSenderId: "479865483454",
    appId: "1:479865483454:web:1d14f0ee5c3e1f186e6eef"
};

export default firebase.initializeApp(firebaseConfig);