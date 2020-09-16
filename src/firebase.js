import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDB7LWMF7XjjLvLQusD9JW2EDEX-fwvuEY",
  authDomain: "shirshak-facebook.firebaseapp.com",
  databaseURL: "https://shirshak-facebook.firebaseio.com",
  projectId: "shirshak-facebook",
  storageBucket: "shirshak-facebook.appspot.com",
  messagingSenderId: "344339697150",
  appId: "1:344339697150:web:d5309d3b80902f2cebc4af",
  measurementId: "G-DPPFZH070C",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { provider, auth };
export default db;
