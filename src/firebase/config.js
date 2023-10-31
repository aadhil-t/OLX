import firebase from "firebase/compat/app";
import 'firebase/compat/auth'
import 'firebase/compat/firestore'
import 'firebase/compat/storage'


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCfW891Beoa62APvxYt-pSxv_-wJfEaa3s",
  authDomain: "olxdemo-1ae09.firebaseapp.com",
  projectId: "olxdemo-1ae09",
  storageBucket: "olxdemo-1ae09.appspot.com",
  messagingSenderId: "13093446975",
  appId: "1:13093446975:web:7b402e0ac73a029f315f8a",
  measurementId: "G-C9NB4J5EZC"
};

export default firebase.initializeApp(firebaseConfig);
