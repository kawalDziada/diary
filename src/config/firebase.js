import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyA2t4m5ldFNI-uGLVM5KBQ8rHjZB7GXXQ0",
    authDomain: "diary-14765.firebaseapp.com",
    databaseURL: "https://diary-14765.firebaseio.com",
    projectId: "diary-14765",
    storageBucket: "diary-14765.appspot.com",
    messagingSenderId: "960274792245"
};
firebase.initializeApp(config);

export default firebase;
