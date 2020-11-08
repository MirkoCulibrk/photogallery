import * as firebase from 'firebase';
import 'firebase/storage';
import 'firebase/firestore';
var firebaseConfig = {
    apiKey: "AIzaSyCYhn4bEV9oA8L7tc_pkJaZ8tH6IQKGVaQ",
    authDomain: "gallery-83cc6.firebaseapp.com",
    databaseURL: "https://gallery-83cc6.firebaseio.com",
    projectId: "gallery-83cc6",
    storageBucket: "gallery-83cc6.appspot.com",
    messagingSenderId: "756294976657",
    appId: "1:756294976657:web:250504143979d25472eb30"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

const projectStorage=firebase.storage();
const projectFirestore=firebase.firestrore();

export {projectStorage,projectFirestore};