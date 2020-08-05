import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBBSadOr9RrJWHYVe5c8Bmi5s3iJWcbEsQ",
  authDomain: "murmur-c8a2a.firebaseapp.com",
  databaseURL: "https://murmur-c8a2a.firebaseio.com",
  projectId: "murmur-c8a2a",
  storageBucket: "murmur-c8a2a.appspot.com",
  messagingSenderId: "769399185581",
  appId: "1:769399185581:web:694753f7c50ca2ca88e624",
  measurementId: "G-84R715TSFY",
});

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage };
