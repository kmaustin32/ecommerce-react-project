import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config = {
    apiKey: "AIzaSyAPRzsDFwnARLq6U7iZ2UUIAadeD2t0oYw",
    authDomain: "ecommerce-react-project-ec95f.firebaseapp.com",
    projectId: "ecommerce-react-project-ec95f",
    storageBucket: "ecommerce-react-project-ec95f.appspot.com",
    messagingSenderId: "638656855307",
    appId: "1:638656855307:web:3666c7492bb12c589df60e",
    measurementId: "G-8B4RSC7BHV"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt: 'select_account'});
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;