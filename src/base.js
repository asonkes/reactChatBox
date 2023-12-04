import { initializeApp} from 'firebase/app'
import {getDatabase} from 'firebase/database'

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

export default database