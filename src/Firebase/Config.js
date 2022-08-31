import firebase from "firebase/app";
import "firebase/firestore";

//firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB3xkVMOJFXt8NJlaubJ7hhgehZs1Y-hlk",
  authDomain: "project-thirteen-database.firebaseapp.com",
  projectId: "project-thirteen-database",
  storageBucket: "project-thirteen-database.appspot.com",
  messagingSenderId: "292606768278",
  appId: "1:292606768278:web:47b09ee9cf8f65161afeb7",
};

//initialize firebase
firebase.initializeApp(firebaseConfig);

//connect to firestore database
const app = firebase.firestore();

export { app };
