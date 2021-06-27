import firebase from 'firebase';    

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyDF35zHhRLVUs1m5mZZ4STM0LEXMPhBK6Y",
    authDomain: "tiktrailer.firebaseapp.com",
    projectId: "tiktrailer",
    storageBucket: "tiktrailer.appspot.com",
    messagingSenderId: "1047261756340",
    appId: "1:1047261756340:web:850e84f812309b04ba10e1",
    measurementId: "G-PCTTJ303RH"
  });

  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const storage = firebase.storage();

  export { db, auth, storage};