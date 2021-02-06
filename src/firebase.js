import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyARPsEwWJqQy-R3AXxr_FUuE2h7sMly6vY",
    authDomain: "linkedin-clone-f5455.firebaseapp.com",
    projectId: "linkedin-clone-f5455",
    storageBucket: "linkedin-clone-f5455.appspot.com",
    messagingSenderId: "116246332108",
    appId: "1:116246332108:web:f5c180f692861e0c337869"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  
  export { db, auth };