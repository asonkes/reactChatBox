import { initializeApp} from 'firebase/app'
import {getFirestore} from 'firebase/firestore'
/*import {getDatabase} from 'firebase/database'*/ // qd on avait mis l'ancienne firebase

const firebaseConfig = {
  apiKey: "AIzaSyBNCI9f9jm-fvvqrAJvpTqvD5cnXxMG5tI",
  authDomain: "fir-2-95501.firebaseapp.com",
  projectId: "fir-2-95501",
  storageBucket: "fir-2-95501.appspot.com",
  messagingSenderId: "439413324196",
  appId: "1:439413324196:web:03ecd30d09557f2f346931"
}

const app = initializeApp(firebaseConfig)
const firestore = getFirestore(app)

export default firestore


/*
const firebaseApp = initializeApp({
  apiKey: "AIzaSyDW_SA2eiBOuxlibM2MTxDw8DVgHhL6UB8",
  authDomain: "demo2023-73bb7.firebaseapp.com",
  databaseURL: "https://demo2023-73bb7-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "demo2023-73bb7",
  storageBucket: "demo2023-73bb7.appspot.com",
  messagingSenderId: "49394111431",
  appId: "1:49394111431:web:49d2f35dff5149b100ffe2"
})

const database = getDatabase(firebaseApp)

export default database*/