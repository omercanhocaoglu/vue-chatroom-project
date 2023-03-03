import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";


const firebaseConfig = {
    apiKey: "AIzaSyAOpiejgTh4WrVtH9tJ6rPF5j1lWuMjcKg",
    authDomain: "vue-chatapp-bfc02.firebaseapp.com",
    projectId: "vue-chatapp-bfc02",
    storageBucket: "vue-chatapp-bfc02.appspot.com",
    messagingSenderId: "574440373075",
    appId: "1:574440373075:web:e4074c5827137fe2677fa6"
  };

  firebase.initializeApp(firebaseConfig);
  
  const projectAuth = firebase.auth();
  const projectFirestore = firebase.firestore();
  const timestamp = firebase.firestore.FieldValue.serverTimestamp;

  export { projectFirestore, timestamp, projectAuth };