import firebase from "firebase/app";
import "firebase/storage";
import "firebase/firestore";

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyDVNL1WPNUGE9vp5CtANG1mX1LiGjZA5Hg",
  authDomain: "mikagram-13cb1.firebaseapp.com",
  databaseURL: "https://mikagram-13cb1.firebaseio.com",
  projectId: "mikagram-13cb1",
  storageBucket: "mikagram-13cb1.appspot.com",
  messagingSenderId: "750354294079",
  appId: "1:750354294079:web:bda7eaa14f4d62d88e9f8a",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectFirestore, projectStorage, timestamp };
