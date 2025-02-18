import { initializeApp } from "firebase/app";

console.log(process.env)
const firebaseConfig = {
    apiKey: "AIzaSyBLZsvWjphQwuag2WnQYfesh_AdfTmtsrQ",
    authDomain: "superio-auth.firebaseapp.com",
    projectId: "superio-auth",
    storageBucket: "superio-auth.firebasestorage.app",
    messagingSenderId: "209080568226",
    appId: "1:209080568226:web:b8be71c9007ff6708fcafb"
};

const app = initializeApp(firebaseConfig);