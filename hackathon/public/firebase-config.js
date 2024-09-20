// firebase-config.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.0.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.0.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.0.0/firebase-firestore.js";

const firebaseConfig = {
    apiKey: "AIzaSyCLCj47ZXDqyoy-wKACYvOLhYMi7UR8wVw",
    authDomain: "portal-b5c12.firebaseapp.com",
    projectId: "portal-b5c12",
    storageBucket: "portal-b5c12.appspot.com",
    messagingSenderId: "280578143503",
    appId: "1:280578143503:web:bac9783500f4d7642d3a7a",
    measurementId: "G-ECNGKRCY53"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
