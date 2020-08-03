import * as firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyCJkiqrW8T2F2j3-pwnNBGNWYdL79Zk5Cg",
    authDomain: "ltmfiregram.firebaseapp.com",
    databaseURL: "https://ltmfiregram.firebaseio.com",
    projectId: "ltmfiregram",
    storageBucket: "ltmfiregram.appspot.com",
    messagingSenderId: "715356716115",
    appId: "1:715356716115:web:7f05a878f78dfb180edaa6"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const projectStorage = firebase.storage();
  const projectFirestore = firebase.firestore();
  const timestamp = firebase.firestore.FieldValue.serverTimestamp;

  export {projectStorage, projectFirestore, timestamp};