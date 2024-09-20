// login.js
import { auth } from './firebase-config.js';
import { signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.0.0/firebase-auth.js";

document.getElementById("loginForm").addEventListener("submit", async (e) => {
    e.preventDefault();
    
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    
    try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;
        // Redirect based on role (you'll store roles in Firestore)
        window.location.href = user.email === 'admin@example.com' ? 'admin.html' : 'student.html';
    } catch (error) {
        console.error("Error during login:", error);
        alert("Login failed: " + error.message);
    }
});
