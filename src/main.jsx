import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCOvecgaoLKoCX-Kt5ZN629MMNZKRadRr4",
    authDomain: "agua-la-boca.firebaseapp.com",
    projectId: "agua-la-boca",
    storageBucket: "agua-la-boca.appspot.com",
    messagingSenderId: "43726851224",
    appId: "1:43726851224:web:880b352453a0ad0d7614ed"
};

// Initialize Firebase
initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(<App />)
