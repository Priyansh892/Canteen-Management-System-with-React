// Import the functions you need from the SDKs you need
import firebase from 'firebase';
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
const firebaseConfig = {
  apiKey: "AIzaSyAtggkPDtBap2t-x3rg9NSQ8ftRcrmDUUA",
  authDomain: "canteen-management-syste-c8cf0.firebaseapp.com",
  projectId: "canteen-management-syste-c8cf0",
  storageBucket: "canteen-management-syste-c8cf0.appspot.com",
  messagingSenderId: "1077873832533",
  appId: "1:1077873832533:web:88f1c85371d2917183dadc",
  measurementId: "G-GL4VLS2XML"
};
firebase.initializeApp(firebaseConfig);
export default firebase;
//const analytics = getAnalytics(app);