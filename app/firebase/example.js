import firebase from 'firebase';
//Use your data here from Firebase and put the name of the file as index.js
try {
var config = {
    apiKey: "",
    authDomain: "",
    databaseURL: "",
    storageBucket: "",
    messagingSenderId: ""
  };
  firebase.initializeApp(config);
} catch (e) {

}

  export var firebaseRef = firebase.database().ref();
  export default firebase;
