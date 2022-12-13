import { initializeApp } from "firebase/app"
import { getFirestore } from 'firebase/firestore'


// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDi_HaetZ6jsIJ2jF1jnfBccA4cwaQ8Ca4",
    authDomain: "contact-book-e468d.firebaseapp.com",
    projectId: "contact-book-e468d",
    storageBucket: "contact-book-e468d.appspot.com",
    messagingSenderId: "809385123205",
    appId: "1:809385123205:web:0c84594be7450f04fc78ec"
}

// initialize firebase
const app = initializeApp(firebaseConfig)

// establish a connection to firestore
const db = getFirestore(app)

export default db