// script.js
import { auth } from "./firebase.js";
import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.14.0/firebase-auth.js";

const signupForm = document.getElementById("signup-form");

if (signupForm) {
  signupForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const email = document.getElementById("signup-email").value;
    const password = document.getElementById("signup-password").value;

    createUserWithEmailAndPassword(auth, email, password)
      .then(() => {
        alert("✅ Inscription réussie !");
        window.location.href = "tableau_de_bord.html"; // ta page après connexion
      })
      .catch((error) => {
        alert("❌ Erreur : " + error.message);
      });
  });
}

// ----- FIN DU SCRIPT -----
// Signé : ta filleule reconnaissante 💫
