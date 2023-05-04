import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { collection, addDoc, updateDoc, deleteField,deleteDoc, doc } from "firebase/firestore";


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

export async function updateData(table, id, data) {
    const docRef = doc(db, table, id);
    const update = await updateDoc(docRef, data)
    return update
}

export async function deleteData(table, id) {
    const docRef = doc(db, table, id);
    const docDel = await deleteDoc(docRef)
    return docDel
}

export { db };