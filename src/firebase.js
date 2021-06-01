import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBfw9_JxNSQ5k8g1m5r_kW_VJKJqPP8uEw",
  authDomain: "rock-paper-scissors-app-5573e.firebaseapp.com",
  projectId: "rock-paper-scissors-app-5573e",
  storageBucket: "rock-paper-scissors-app-5573e.appspot.com",
  messagingSenderId: "42163840640",
  appId: "1:42163840640:web:d81569328ad396d417e865",
  measurementId: "G-P3SFNH3SBS",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
