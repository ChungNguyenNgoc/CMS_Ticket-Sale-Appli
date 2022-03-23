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
const taskStore = store.collection('TicketManage')

export const test = async() => {
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

console.log(test())








// import { initializeApp } from 'firebase/app';
// import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
// // Follow this pattern to import other Firebase services
// // import { } from 'firebase/<service>';

// // TODO: Replace the following with your app's Firebase project configuration
// const firebaseConfig = {
//     apiKey: "AIzaSyCVQNVRB19O2cYWgfmEofG9yyMT2JIRTKw",
//     authDomain: "reactjs-cms-ticket-sale-appli.firebaseapp.com",
//     projectId: "reactjs-cms-ticket-sale-appli",
//     storageBucket: "reactjs-cms-ticket-sale-appli.appspot.com",
//     messagingSenderId: "623999291205",
//     appId: "1:623999291205:web:0d3b8b4ff53ba490cf782c",
//     measurementId: "G-TDHPH1PS94"
// };

// const app = initializeApp(firebaseConfig);
// const db = getFirestore(app);

// // Get a list of cities from your database
// async function getCities(db: any) {
//   const citiesCol = collection(db, 'TicketChange');
//   const citySnapshot = await getDocs(citiesCol);
//   const cityList = citySnapshot.docs.map(doc => doc.data());
//   return cityList;
// }

// export default getCities;