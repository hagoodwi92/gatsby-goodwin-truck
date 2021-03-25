import * as firebase from 'firebase';
import 'firebase/firestore';

var firebaseConfig = {
  apiKey: "AIzaSyDL13G3SWyVzfUYTYU2NvLgcqDzELfj7d4",
  authDomain: "goodwin-truck.firebaseapp.com",
  projectId: "goodwin-truck",
  storageBucket: "goodwin-truck.appspot.com",
  messagingSenderId: "629252038848",
  appId: "1:629252038848:web:e8f58d18f809e4344c0d25",
  measurementId: "G-V700Z9G8Q9"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// Initialize Firebase


export default firebase;
