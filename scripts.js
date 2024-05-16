// Initialize Firebase
const firebaseConfig = {
    apiKey: "AIzaSyDClA6EmZEHc-5gDbxZLvN0CXutBJKttqQ",
    authDomain: "medipalproject.firebaseapp.com",
    databaseURL: "https://medipalproject-default-rtdb.firebaseio.com",
    projectId: "medipalproject",
    storageBucket: "medipalproject.appspot.com",
    messagingSenderId: "381925114279",
    appId: "1:381925114279:web:b0527b128f8ebd3b45b682",
    measurementId: "G-01XR6G71WZ"
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const database = firebase.database();

// Function to handle user registration
function registerUser(event) {
    event.preventDefault();
    
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Create user with Firebase Authentication
    auth.createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
            // User registered successfully
            const user = userCredential.user;

            // Save additional user information in the database
            return database.ref('users/' + user.uid).set({
                username: username,
                email: email
            });
        })
        .then(() => {
            alert('User registered successfully!');
            document.getElementById('registrationForm').reset();
        })
        .catch((error) => {
            console.error('Error registering user:', error);
            alert('An error occurred. Please try again later.');
        });
}

// Event listener for the registration form
document.getElementById('registrationForm').addEventListener('submit', registerUser);

// Function to handle question submission and simulate an answer
function submitQuestion(event) {
    event.preventDefault();

    console.log("Question submitted"); // Check if the function is triggered

    const userInput = document.getElementById('userInput').value;
    const responseDiv = document.getElementById('response');

    console.log("User input:", userInput); // Check if user input is captured

    // Simulate an answer (for now, just a placeholder)
    const simulatedAnswer = `Simulated answer to: "${userInput}"`;

    console.log("Simulated answer:", simulatedAnswer); // Check if the simulated answer is generated

    // Display the response
    responseDiv.innerHTML = `<p>${simulatedAnswer}</p>`;

    // Clear the input field
    document.getElementById('userInput').value = '';
}

// Event listener for the question form
document.getElementById('questionForm').addEventListener('submit', submitQuestion);
