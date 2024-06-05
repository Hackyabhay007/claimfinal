import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';


// Replace with your own Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAbQTiFwCDmvcpdcsPzVwF0sg_x3-62Oyw",
    authDomain: "netflix-ff71d.firebaseapp.com",
    projectId: "netflix-ff71d",
    storageBucket: "netflix-ff71d.appspot.com",
    messagingSenderId: "236178863029",
    appId: "1:236178863029:web:3a6afe09c1f26d86cf9ffc",
    measurementId: "G-VTS107XJRN"
  };


  firebase.initializeApp(firebaseConfig);
  const db =firebase.firestore()
  export default db;
