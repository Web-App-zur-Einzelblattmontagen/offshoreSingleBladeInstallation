import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyATDGaPvGUt_HY7P4qRnpgSGRZjS_jxZMg",
  authDomain: "osbi-bik.firebaseapp.com",
  projectId: "osbi-bik",
  storageBucket: "osbi-bik.appspot.com",
  messagingSenderId: "768062368348",
  appId: "1:768062368348:web:dc061bf83b8124b91e5499",
  measurementId: "G-9P38ET4ZXD",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
export { auth, provider };
