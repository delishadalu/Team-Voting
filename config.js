import firebase from 'firebase';

// add SDK Firebase
const firebaseConfig = {
    apiKey: "AIzaSyD-jsYWUSLHw5V0l6ihDvCRekTJ3aIJNQg",
    authDomain: "school-attendance-app-a8c7f.firebaseapp.com",
    databaseURL: "https://school-attendance-app-a8c7f-default-rtdb.firebaseio.com",
    projectId: "school-attendance-app-a8c7f",
    storageBucket: "school-attendance-app-a8c7f.appspot.com",
    messagingSenderId: "612348307667",
    appId: "1:612348307667:web:fa38c3fe67b109b0c9cc26"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();