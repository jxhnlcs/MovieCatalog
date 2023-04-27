import firebase from 'firebase/compat/app'; // npm install firebase
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = { 
    apiKey: "AIzaSyDtClUcSmuBw6LwO8JdCRpWOjAAt2549fM",
    authDomain: "catalogo-filmes-6fb89.firebaseapp.com",
    projectId: "catalogo-filmes-6fb89",
    storageBucket: "catalogo-filmes-6fb89.appspot.com",
    messagingSenderId: "289867860912",
    appId: "1:289867860912:web:9c0c30effd71bb6ab9e475",
    measurementId: "G-5YR9HB2EYQ"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth, db };