import app from "firebase/app";
import 'firebase/firestore'
import 'firebase/auth'


const firebaseConfig = {
    apiKey: "AIzaSyCkIdfzKEj90AcocF1Vgv7fP3rLtggqCIc",
    authDomain: "app-react-v1.firebaseapp.com",
    projectId: "app-react-v1",
    storageBucket: "app-react-v1.appspot.com",
    messagingSenderId: "785461442670",
    appId: "1:785461442670:web:e0bfa9bbd2b63021c9ce7f"
  };

const firebase=app.initializeApp(firebaseConfig);
const db=firebase.firestore()
const auth= app.auth()

export {firebase,auth,db}