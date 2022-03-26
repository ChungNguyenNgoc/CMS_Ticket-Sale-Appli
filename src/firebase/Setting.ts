import firebase from "firebase/compat/app";
import "firebase/compat/firestore"
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { StarFilled } from "@ant-design/icons";

firebase.initializeApp  ({
  apiKey: "AIzaSyAWn3F7bkJzr-PEd6f7z1tBlnvQ8BDczHc",
  authDomain: "cms-ticket-sale-e8ce0.firebaseapp.com",
  projectId: "cms-ticket-sale-e8ce0",
  storageBucket: "cms-ticket-sale-e8ce0.appspot.com",
  messagingSenderId: "882817945292",
  appId: "1:882817945292:web:9282e438d473cb56343c69",
  measurementId: "G-KLZC9DK797"
});


export const taskStore = firebase.firestore().collection('Setting')
export default firebase