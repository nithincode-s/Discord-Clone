import firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyBuBamJ0HxFNdem3j7uk88qB1vnD-LCqro",
    authDomain: "discord-95ca0.firebaseapp.com",
    projectId: "discord-95ca0",
    storageBucket: "discord-95ca0.appspot.com",
    messagingSenderId: "991535235701",
    appId: "1:991535235701:web:af7079dc9af54a8722ee3c"
  };
  // Initialize Firebase
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();

  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export {auth, provider, db};