import { initializeApp } from "firebase/app";
import { getDatabase, ref, set } from "firebase/database";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCmP_GhCQMFeqnMwsLgVkOCiA_V9g5N3bA",
  authDomain: "booknotes-e936a.firebaseapp.com",
  projectId: "booknotes-e936a",
  storageBucket: "booknotes-e936a.appspot.com",
  messagingSenderId: "916769314833",
  appId: "1:916769314833:web:ceeccdfcdb95f8e29979b0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
const auth = getAuth(app);

let EmailInp = document.getElementById('emailInp');

let RegisterUser = evt => {
    evt.preventDefault();
    let email = EmailInp.value;
    let password = "YOUR_PASSWORD_HERE"; // Set your desired password here
    createUserWithEmailAndPassword(auth, email, password)
    .then((credentials)=>{
        console.log(credentials);

        // Add user data to the database
        const userId = credentials.user.uid;
        const userDataRef = ref(database, `users/${userId}`);
        set(userDataRef, {
            email: email,
            // Add any other user data here
        });
    })
    .catch((error)=>{
        alert(error.message);
        console.log(error.code);
        console.log(error.message);
    })
}

export { app, database, auth };
