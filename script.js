import { auth } from "./firebase.js";
import { 
  createUserWithEmailAndPassword, 
  signInWithEmailAndPassword,
  signOut 
} from "https://www.gstatic.com/firebasejs/11.0.1/firebase-auth.js";

// === Sélection des éléments du DOM ===
const signupForm = document.getElementById("signup-form");
const loginForm = document.getElementById("login-form");
const logoutBtn = document.getElementById("logout-btn");

// === INSCRIPTION ===
if (signupForm) {
  signupForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const email = document.getElementById("signup-email").value;
    const password = document.getElementById("signup-password").value;

    createUserWithEmailAndPassword(auth, email, password)
      .then(() => {
        alert("✅ Inscription réussie !");
        window.location.href = "tableau.html"; // Redirige vers tableau
      })
      .catch((error) => {
        alert("❌ Erreur : " + error.message);
      });
  });
}

// === CONNEXION ===
if (loginForm) {
  loginForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const email = document.getElementById("login-email").value;
    const password = document.getElementById("login-password").value;

    signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        alert("👋 Connexion réussie !");
        window.location.href = "tableau.html";
      })
      .catch((error) => {
        alert("❌ Erreur : " + error.message);
      });
  });
}

// === DÉCONNEXION ===
if (logoutBtn) {
  logoutBtn.addEventListener("click", () => {
    signOut(auth)
      .then(() => {
        alert("🚪 Déconnexion réussie !");
        window.location.href = "login.html";
      })
      .catch((error) => {
        alert("❌ Erreur de déconnexion : " + error.message);
      });
  });
            }
