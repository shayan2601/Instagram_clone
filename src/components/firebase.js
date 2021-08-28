import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB4bB7FS1UUVAzQEn5jZfX7md407gmE1fc",
  authDomain: "instagram-clone-tailwind-27b27.firebaseapp.com",
  projectId: "instagram-clone-tailwind-27b27",
  storageBucket: "instagram-clone-tailwind-27b27.appspot.com",
  messagingSenderId: "906229765715",
  appId: "1:906229765715:web:4df3f5be0c15fc685e18a6",
  measurementId: "G-44BFGBESJH",
};

const firebaseapp = firebase.initializeApp(firebaseConfig);
const db = firebaseapp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.EmailAuthProvider();
const storage = firebase.storage();

export { storage, provider, auth };
export default db;
