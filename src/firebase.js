import firebase from 'firebase';

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyBGo5WjdcVUipRA0MQM7-LjZKcURXVW6wQ",
  authDomain: "wacky-weather.firebaseapp.com",
  databaseURL: "https://wacky-weather.firebaseio.com",
  projectId: "wacky-weather",
  storageBucket: "wacky-weather.appspot.com",
  messagingSenderId: "834314117340",
  appId: "1:834314117340:web:b5a28f1dec6d29528b5419"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Export firebase
export default firebase;
