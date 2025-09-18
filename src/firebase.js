import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCH6XwFqfFhUlRET9e3E48GJSl7UE7l_Jc",
    authDomain: "twitter-clone-udemy-4102f.firebaseapp.com",
    projectId: "twitter-clone-udemy-4102f",
    storageBucket: "twitter-clone-udemy-4102f.firebasestorage.app",
    messagingSenderId: "1089106643259",
    appId: "1:1089106643259:web:b967bf41f8f703dcdb4f1e"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;