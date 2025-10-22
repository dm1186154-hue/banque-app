<!-- firebase.js -->
<script type="module">
  import { initializeApp } from "https://www.gstatic.com/firebasejs/12.4.0/firebase-app.js";
  import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/12.4.0/firebase-auth.js";
  import { getFirestore, setDoc, doc } from "https://www.gstatic.com/firebasejs/12.4.0/firebase-firestore.js";

  const firebaseConfig = {
    apiKey: "AIzaSyAwGbQuv9EoIvBm7WC0OLTQ41cgleXd804",
    authDomain: "banque-app-66bf9.firebaseapp.com",
    projectId: "banque-app-66bf9",
    storageBucket: "banque-app-66bf9.firebasestorage.app",
    messagingSenderId: "833823730245",
    appId: "1:833823730245:web:64dd77db2f273d24f9912c"
  };

  // Initialisation Firebase
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
  const db = getFirestore(app);

  // --- Gestion de l'inscription ---
  window.signup = async function signup(email, password) {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      await setDoc(doc(db, "users", user.uid), {
        email: email,
        createdAt: new Date()
      });
      alert("Inscription réussie ✅");
    } catch (error) {
      alert("Erreur : " + error.message);
    }
  };

  // --- Gestion de la connexion ---
  window.login = async function login(email, password) {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      alert("Connexion réussie 🎉");
      window.location.href = "dashboard.html"; // redirection après connexion
    } catch (error) {
      alert("Erreur : " + error.message);
    }
  };
</script>
