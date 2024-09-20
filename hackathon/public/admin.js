// admin.js
import { auth, db } from './firebase-config.js';
import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.0.0/firebase-auth.js";
import { collection, addDoc } from "https://www.gstatic.com/firebasejs/9.0.0/firebase-firestore.js";

// Add Student Logic
document.getElementById('addStudentForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const cnic = document.getElementById('cnic').value;

    try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;
        await addDoc(collection(db, "students"), {
            uid: user.uid,
            firstName,
            lastName,
            email,
            cnic,
            userType: "student"
        });
        alert("Student added successfully!");
    } catch (error) {
        console.error("Error adding student:", error);
        alert("Failed to add student: " + error.message);
    }
});

// Upload Student Marks Logic
document.getElementById('uploadMarksForm').addEventListener('submit', async (e) => {
    e.preventDefault();

    const course = document.getElementById('course').value;
    const CNIC = document.getElementById('CNIC').value;
    const marks = document.getElementById('marks').value;
    const totalMarks = document.getElementById('totalMarks').value;
    const grade = document.getElementById('grade').value;

    try {
        await addDoc(collection(db, "marks"), {
            CNIC,
            course,
            marks,
            totalMarks,
            grade
        });
        alert("Marks uploaded successfully!");
    } catch (error) {
        console.error("Error uploading marks:", error);
        alert("Failed to upload marks: " + error.message);
    }
});
