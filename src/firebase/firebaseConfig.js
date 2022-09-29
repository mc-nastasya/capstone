import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
 
// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyCUJEUZe6C8BH6N-Hfhf8MY4cOVwJehEC8",
  authDomain: "capstone-7109c.firebaseapp.com",
  projectId: "capstone-7109c",
  storageBucket: "capstone-7109c.appspot.com",
  messagingSenderId: "146825991847",
  appId: "1:146825991847:web:67fee1fc401a852afaed82"
};
 
// Firebase storage reference
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);
export default storage;