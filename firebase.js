// firebase.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.14.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.14.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyAwGbQuv9EoIvBm7WC0OLTQ41cgleXd804",
  authDomain: "banque-app-66bf9.firebaseapp.com",
  projectId: "banque-app-66bf9",
  storageBucket: "banque-app-66bf9.appspot.com",
  messagingSenderId: "606307063540",
  appId: "1:606307063540:web:b5c4a0ef0b07b962f7dd67"
};

// Initialisation Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
