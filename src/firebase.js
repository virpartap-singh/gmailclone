import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAAXv1HWQvWbl-hnDa-FwpOJJaOnY3Yfb4",
    authDomain: "clone-886ea.firebaseapp.com",
    projectId: "clone-886ea",
    storageBucket: "clone-886ea.appspot.com",
    messagingSenderId: "879021918920",
    appId: "1:879021918920:web:1a06efa64ed022ac5af3fd",
    measurementId: "G-VJDPW4K2EE"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
