// Import Firebase
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.14.0/firebase-app.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.14.0/firebase-auth.js";

// Configuration Firebase
const firebaseConfig = {
  apiKey: "AIzaSyAwGbqv9eoEvBvj7lQ7MBYGr0PvCIs0o9s",
  authDomain: "banque-app-66bf9.firebaseapp.com",
  projectId: "banque-app-66bf9",
  storageBucket: "banque-app-66bf9.appspot.com",
  messagingSenderId: "833823730245",
  appId: "1:833823730245:web:64dd77dbf2d73d24f9912c"
};

// Initialiser Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Fonction de connexion
document.getElementById("loginBtn").addEventListener("click", () => {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      document.getElementById("message").innerText = "Connexion réussie ✅";
    })
    .catch((error) => {
      document.getElementById("message").innerText = "Erreur : " + error.message;
    });
});
