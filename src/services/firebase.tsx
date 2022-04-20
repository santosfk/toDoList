import * as firebase from "firebase/app";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyDe6X6Zmhsv-UiVVdXiOZNfEUJEySMKzVg",
  authDomain: "todolist-9c4d8.firebaseapp.com",
  projectId: "todolist-9c4d8",
  storageBucket: "todolist-9c4d8.appspot.com",
  messagingSenderId: "88960070346",
  appId: "1:88960070346:web:762907cd285f063450ba33",
};

export const app = firebase.initializeApp(firebaseConfig);
const database = getFirestore(app);
export default database;
