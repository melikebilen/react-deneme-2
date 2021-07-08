import firebase from 'firebase';

var firebaseConfig = {
  apiKey: "AIzaSyBj1zICohLWArczEJJ6N0bLcXEfCCVmp1w",
  authDomain: "tdoaproject-5414d.firebaseapp.com",
  databaseURL: "https://tdoaproject-5414d-default-rtdb.firebaseio.com",
  projectId: "tdoaproject-5414d",
  storageBucket: "tdoaproject-5414d.appspot.com",
  messagingSenderId: "50653617667",
  appId: "1:50653617667:web:2e8ca4ae022737bfb2b836",
  measurementId: "G-H4G0L0765T"
};

  

firebase.initializeApp(firebaseConfig);

export default firebase;

export const database = firebase.database();
export const storage = firebase.storage();