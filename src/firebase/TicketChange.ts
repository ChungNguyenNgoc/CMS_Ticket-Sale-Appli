import firebase from "firebase/compat/app";
import "firebase/compat/firestore"
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyAWn3F7bkJzr-PEd6f7z1tBlnvQ8BDczHc",
  authDomain: "cms-ticket-sale-e8ce0.firebaseapp.com",
  projectId: "cms-ticket-sale-e8ce0",
  storageBucket: "cms-ticket-sale-e8ce0.appspot.com",
  messagingSenderId: "882817945292",
  appId: "1:882817945292:web:9282e438d473cb56343c69",
  measurementId: "G-KLZC9DK797"
};

const store = firebase.initializeApp(firebaseConfig).firestore()
const taskStore = store.collection('TicketChange')

export const ticketChange = async() => {
      await taskStore.get().then(
        (
          snapshot: firebase.firestore.QuerySnapshot<firebase.firestore.DocumentData>
        ) => {
          const data = snapshot.docs.map((doc) => ({ ...doc.data() }));
          const ticket = data.map((item) => ({
           ...item
          }));
         
          console.log(ticket)
        }
      )
      .catch((err) => console.log(err));
}

// console.log(ticketChange())

