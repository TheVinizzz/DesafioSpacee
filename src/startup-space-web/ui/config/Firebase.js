import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";


const firebaseConfig = {
    apiKey: "AIzaSyCo0ZW2YUOuoP5_IBCcU5KCcjyOTnWTvRM",
    authDomain: "autht-7f3a9.firebaseapp.com",
    databaseURL: "https://autht-7f3a9.firebaseio.com",
    projectId: "autht-7f3a9",
    storageBucket: "autht-7f3a9.appspot.com",
    messagingSenderId: "925295374020",
    appId: "1:925295374020:web:f3a450fb0e0136e5b06391"
};
export default firebase.initializeApp(firebaseConfig);