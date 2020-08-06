import firebase from 'firebase/app'
import 'firebase/storage'

var config = {
    apiKey: "AIzaSyAHeyy5EVgsIF57zOWNTKdkMf-P-_1jpLo",
    authDomain: "image-storage-867c8.firebaseapp.com",
    databaseURL: "https://image-storage-867c8.firebaseio.com",
    projectId: "image-storage-867c8",
    storageBucket: "image-storage-867c8.appspot.com",
    messagingSenderId: "595099620345",
    appId: "1:595099620345:web:b4bbccde35524abe176328",
    measurementId: "G-FDBSS3X49G"
  };
  // Initialize Firebase
  firebase.initializeApp(config);

  const storage = firebase.storage()

  export {
      storage, firebase as default
  }
  