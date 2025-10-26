<!-- Firebase App (base SDK) -->
<script src="https://www.gstatic.com/firebasejs/10.12.3/firebase-app.js"></script>

<!-- Firebase Auth -->
<script src="https://www.gstatic.com/firebasejs/10.12.3/firebase-auth.js"></script>

<script>
  // Configuration Firebase
  const firebaseConfig = {
    apiKey: "AIzaSyAwGbQuv9EoIvBm7WC0OLTQ41cgleXd804",
    authDomain: "banque-app-66bf9.firebaseapp.com",
    projectId: "banque-app-66bf9",
    storageBucket: "banque-app-66bf9.appspot.com",
    messagingSenderId: "61613833199",
    appId: "1:61613833199:web:5d4c81a1d8ecb6f7f3d6e0"
  };

  // Initialiser Firebase
  const app = firebase.initializeApp(firebaseConfig);
  const auth = firebase.getAuth(app);
</script>
