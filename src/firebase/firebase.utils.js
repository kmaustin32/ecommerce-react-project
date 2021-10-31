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

  export const createUserProfileDocument = async (userAuth, additionalData) => {
    if(!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`)
    const snapShot = await userRef.get();

    if(!snapShot.exists) {
      const {displayName, email} = userAuth;
      const dateCreated = new Date();

      try {
        await userRef.set({
          displayName,
          email,
          dateCreated,
          ...additionalData
        })
      } catch(err) {
        console.log('error creating user', err)
      }
    }

    return userRef;
    console.log(snapShot);
  }

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt: 'select_account'});
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;