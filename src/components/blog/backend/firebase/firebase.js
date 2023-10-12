// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDioWCBZdLfFVbmOPDsiDwO9W0nrKsOWNE",
    authDomain: "personal-site---blog.firebaseapp.com",
    projectId: "personal-site---blog",
    storageBucket: "personal-site---blog.appspot.com",
    messagingSenderId: "982349507930",
    appId: "1:982349507930:web:23c47a7bc71e77f0571763",
    measurementId: "G-DMRXYF7S9W"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);