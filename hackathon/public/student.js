// student.js
import { auth, db } from './firebase-config.js';
import { updateDoc, doc, getDoc, collection, query, where, getDocs } from "https://www.gstatic.com/firebasejs/9.0.0/firebase-firestore.js";

// Edit Profile Logic
document.getElementById('editProfileForm').addEventListener('submit', async (e) => {
    e.preventDefault();

    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const cnic = document.getElementById('cnic').value;

    try {
        const user = auth.currentUser;
        const studentRef = doc(db, 'students', user.uid);
        await updateDoc(studentRef, {
            firstName,
            lastName,
            cnic
        });
        alert("Profile updated successfully!");
    } catch (error) {
        console.error("Error updating profile:", error);
        alert("Failed to update profile: " + error.message);
    }
});

// Check Result Logic
document.getElementById('checkResultForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const cnic = document.getElementById('cnicSearch').value;
    const resultDisplay = document.getElementById('resultDisplay');
    resultDisplay.innerHTML = '';

    try {
        const q = query(collection(db, "marks"), where("CNIC", "==", cnic));
        const querySnapshot = await getDocs(q);
        
        if (querySnapshot.empty) {
            resultDisplay.innerHTML = 'No result found';
            return;
        }

        querySnapshot.forEach((doc) => {
            const data = doc.data();
            resultDisplay.innerHTML += `
                <div>
                    <p>Course: ${data.course}</p>
                    <p>Marks: ${data.marks}/${data.totalMarks}</p>
                    <p>Grade: ${data.grade}</p>
                    <p>Cnic: ${data.CNIC}</p>
                </div>
            `;
        });
    } catch (error) {
        console.error("Error fetching result:", error);
        resultDisplay.innerHTML = 'Failed to fetch result';
    }
});
