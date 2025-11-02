// script.js
import { auth } from "./firebase.js";
import { createUserWithEmailAndPassword, updateProfile } from "https://www.gstatic.com/firebasejs/10.14.0/firebase-auth.js";

const signupForm = document.getElementById("signup-form");

if (signupForm) {
  signupForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const nom = document.getElementById("signup-nom").value;
    const prenom = document.getElementById("signup-prenom").value;
    const password = document.getElementById("signup-password").value;

    // Création d'un email factice basé sur le nom et prénom
    const fakeEmail = `${nom}.${prenom}@banque-app.com`.toLowerCase();

    createUserWithEmailAndPassword(auth, fakeEmail, password)
      .then((userCredential) => {
        // Mettre à jour le profil Firebase
        return updateProfile(userCredential.user, {
          displayName: `${prenom} ${nom}`,
        });
      })
      .then(() => {
        alert("✅ Inscription réussie !");
        window.location.href = "tableau_de_bord.html";
      })
      .catch((error) => {
        alert("❌ Erreur : " + error.message);
      });
  });
}

// ----- FIN DU SCRIPT -----
