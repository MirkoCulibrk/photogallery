import  firebase from 'firebase';
import 'firebase/storage';
import 'firebase/firestore';
var firebaseConfig = {
   
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

const projectStorage=firebase.storage();
const projectFirestore=firebase.firestore();
const timestamp=firebase.firestore.FieldValue.serverTimestamp;

export {projectStorage,projectFirestore,timestamp};