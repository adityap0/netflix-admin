import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCvgjaHPqd7lJndqLKrcThJ7-ffw-9kDqI",
  authDomain: "netflix-c9291.firebaseapp.com",
  projectId: "netflix-c9291",
  storageBucket: "netflix-c9291.appspot.com",
  messagingSenderId: "718464226252",
  appId: "1:718464226252:web:b9d3d4329b9bf4d6198369",
  measurementId: "G-Z3G2GZ0YDQ",
};

firebase.initializeApp(firebaseConfig);
const storage = firebase.storage();
export default storage;
