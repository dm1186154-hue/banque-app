// firebase.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.4.0/firebase-app.js";

const firebaseConfig = {
  apiKey: "AIzaSyAwGbQuv9EoIvBm7WC0OLTQ41cgleXd804",
  authDomain: "banque-app-66bf9.firebaseapp.com",
  projectId: "banque-app-66bf9",
  storageBucket: "banque-app-66bf9.firebasestorage.app",
  messagingSenderId: "833823730245",
  appId: "1:833823730245:web:64dd77db2f273d24f9912c"
};

// Initialise Firebase
const app = initializeApp(firebaseConfig);
console.log("Firebase connecté avec succès !");
