import firebase from "firebase/app";
import "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyB1UYYMoQVMldNKkOVyUxk4BQeQkSyigSg",
  authDomain: "workoutjournalprojectfive.firebaseapp.com",
  databaseURL: "https://workoutjournalprojectfive.firebaseio.com",
  projectId: "workoutjournalprojectfive",
  storageBucket: "workoutjournalprojectfive.appspot.com",
  messagingSenderId: "989968337436",
  appId: "1:989968337436:web:f7f7b9ba8f13691ffeadd9"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;