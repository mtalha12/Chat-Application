import * as firebase from 'firebase';




  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyDB15SKDvpLiPrudevpI9CQuMGZb6MbiaI",
    authDomain: "chat-app-3512.firebaseapp.com",
    databaseURL: "https://chat-app-3512.firebaseio.com",
    projectId: "chat-app-3512",
    storageBucket: "chat-app-3512.appspot.com",
    messagingSenderId: "546458099080"
  };
  const fire =  firebase.initializeApp(config);

  export default fire
  