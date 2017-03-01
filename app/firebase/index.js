import firebase from 'firebase';

try {
var config = {
    apiKey: "AIzaSyB72K8eGquLNbXg4Y1_4WtBGwSvqkjSIjA",
    authDomain: "reduxtodo-6ba26.firebaseapp.com",
    databaseURL: "https://reduxtodo-6ba26.firebaseio.com",
    storageBucket: "reduxtodo-6ba26.appspot.com",
    messagingSenderId: "213681148991"
  };
  firebase.initializeApp(config);
} catch (e) {

}

  export var firebaseRef = firebase.database().ref();
  export default firebase;
