import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { collection, addDoc } from "firebase/firestore";


const firebaseConfig = { 
    apiKey: "AIzaSyDtClUcSmuBw6LwO8JdCRpWOjAAt2549fM",
    authDomain: "catalogo-filmes-6fb89.firebaseapp.com",
    projectId: "catalogo-filmes-6fb89",
    storageBucket: "catalogo-filmes-6fb89.appspot.com",
    messagingSenderId: "289867860912",
    appId: "1:289867860912:web:9c0c30effd71bb6ab9e475",
    measurementId: "G-5YR9HB2EYQ"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export async function saveData(table, data) {
    const docRef = await addDoc(collection(db, table), data)
    return docRef
}

export { db };