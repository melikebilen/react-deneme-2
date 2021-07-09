import firebase from 'firebase';
/*
var firebaseConfig = {
  apiKey: "AIzaSyBj1zICohLWArczEJJ6N0bLcXEfCCVmp1w",
  authDomain: "tdoaproject-5414d.firebaseapp.com",
  databaseURL: "https://tdoaproject-5414d-default-rtdb.firebaseio.com",
  projectId: "tdoaproject-5414d",
  storageBucket: "tdoaproject-5414d.appspot.com",
  messagingSenderId: "50653617667",
  appId: "1:50653617667:web:2e8ca4ae022737bfb2b836",
  measurementId: "G-H4G0L0765T"
};*/
var firebaseConfig = {
  apiKey: "AIzaSyBQjxxJqCcYhjYDH6GFwjSGdQ7VeqVGhCI",
  authDomain: "tdoa-23cf7.firebaseapp.com",
  databaseURL: "https://tdoa-23cf7-default-rtdb.firebaseio.com",
  projectId: "tdoa-23cf7",
  storageBucket: "tdoa-23cf7.appspot.com",
  messagingSenderId: "611153024504",
  appId: "1:611153024504:web:0f5e82fbf77d611aaf720d",
  measurementId: "G-YYER7FY9DQ"
};

firebase.initializeApp(firebaseConfig);

export default firebase;

export const database = firebase.database();
export const storage = firebase.storage();