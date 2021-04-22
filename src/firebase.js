import firebase from "firebase";
import "firebase/auth";
import "firebase/database";


const firebaseConfig = {
  apiKey: "AIzaSyAUTBTGEB5IN7EXi9dUivvgqzWQFUkZ-sk",
  authDomain: "twitter-react-7ec96.firebaseapp.com",
  databaseURL: "https://twitter-react-7ec96.firebaseio.com",
  projectId: "twitter-react",
  storageBucket: "twitter-react-7ec96.appspot.com",
  messagingSenderId: "84957125409",
  appId: "1:84957125409:web:1d922ac9a8540e849afc60",
  measurementId: "G-306YCK41S1",
};


const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;
