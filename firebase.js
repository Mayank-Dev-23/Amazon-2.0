import firebase from "firebase/compat/app"
import "firebase/compat/auth"
import "firebase/compat/firestore"


firebase.initializeApp({
  apiKey: "AIzaSyC6fdUmNSgF9RMrtOmOYLD-q4Eteto7MCM",
  authDomain: "fir-ba86c.firebaseapp.com",
  projectId: "fir-ba86c",
  storageBucket: "fir-ba86c.appspot.com",
  messagingSenderId: "772100266347",
  appId: "1:772100266347:web:3e6d21c7987cfca0bfd42e"
})


const db= firebase.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();


export {auth ,db,provider} ;