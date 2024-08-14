// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB2IUvR4E7IZ6wYXutUguCIK4T8vuILeTY",
  authDomain: "flashcardsaas-5935b.firebaseapp.com",
  projectId: "flashcardsaas-5935b",
  storageBucket: "flashcardsaas-5935b.appspot.com",
  messagingSenderId: "187668665599",
  appId: "1:187668665599:web:ce9251aa85f5c6d8ed68ca",
  measurementId: "G-VX1S5NJ0GV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);