import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyAz1JpxXHL6ToGdF55V4-cXs_gSSuGyQA8",
    authDomain: "udemy-vue-firebase-sites-945d0.firebaseapp.com",
    projectId: "udemy-vue-firebase-sites-945d0",
    storageBucket: "udemy-vue-firebase-sites-945d0.appspot.com",
    messagingSenderId: "767394491671",
    appId: "1:767394491671:web:f3434a4b60e9ba92459b52"
  };

  // init firebase
  firebase.initializeApp(firebaseConfig)

  const projectFirestore = firebase.firestore()
  const timestamp = firebase.firestore.FieldValue.serverTimestamp

  export { projectFirestore, timestamp  }