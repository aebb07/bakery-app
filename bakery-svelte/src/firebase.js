//import firebase from 'firebase/app';
    var firebaseConfig = {
        apiKey: "AIzaSyA1Ff5qgN3kcjmWbhaZ1JVNhf9z-nHWrqg",
        authDomain: "bakery-app-c9ff5.firebaseapp.com",
        databaseURL: "https://bakery-app-c9ff5.firebaseio.com",
        projectId: "bakery-app-c9ff5",
        storageBucket: "bakery-app-c9ff5.appspot.com/",
        messagingSenderId: "297027941439",
        appId: "1:297027941439:web:16cc2609068d3ceb79748a"
    };

firebase.initializeApp(firebaseConfig);

/**
 * Firebase Auth Google
 */
//import 'firebase/auth'
export const firebaseAuth = firebase.auth();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

/**
 * Firebase Store
 */
export const firebaseStorage = firebase.storage();
//const firebaseStorage = firebase.storage();

/**
 * Firebase Firestore
 */
//import 'firebase/firestore';
export const firestoreDb = firebase.firestore();