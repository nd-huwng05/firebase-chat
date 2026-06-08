// Import the functions you need from the SDKs you need
import {initializeApp, getApps, getApp} from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {getReactNativePersistence, initializeAuth, getAuth} from 'firebase/auth'
// Your web app's Firebase configuration
import AsyncStorage from '@react-native-async-storage/async-storage'
import {getFirestore, collection} from 'firebase/firestore'
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyD3Qrt2_fR4rT9L4xqAoLkI5bynLW2-tks",
    authDomain: "fir-chat-back.firebaseapp.com",
    projectId: "fir-chat-back",
    storageBucket: "fir-chat-back.firebasestorage.app",
    messagingSenderId: "847108909225",
    appId: "1:847108909225:web:10afe0057765d8d149e1b8",
    measurementId: "G-JSP5HZ2981"
};

// Initialize Firebase
const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();

let auth;

try {
    auth = initializeAuth(app, {
        persistence: getReactNativePersistence(AsyncStorage)
    })
} catch (error) {
    auth = getAuth(app)
}


const db = getFirestore(app);

export const usersRef = collection(db, 'users');
export const roomRef = collection(db, 'rooms')

export {auth, db}