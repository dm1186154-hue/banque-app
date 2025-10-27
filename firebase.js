// Importation des fonctions Firebase
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-auth.js";

// Configuration de ton projet Firebase
const firebaseConfig = {
  apiKey: "AIzaSyAwGbQuv9EoIvBm7WC0OLTQ41cgleXd804",
  authDomain: "banque-app-66bf9.firebaseapp.com",
  projectId: "banque-app-66bf9",
  storageBucket: "banque-app-66bf9.appspot.com",
  messagingSenderId: "833823730245",
  appId: "1:833823730245:web:64ddd7dbf2d73d24f9912c"
};

// Initialiser Firebase
const app = initializeApp(firebaseConfig);

// Initialiser l’authentification
export const auth = getAuth(app);
