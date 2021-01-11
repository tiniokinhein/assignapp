import firebase from 'firebase/app'
import 'firebase/database'

var firebaseConfig = {
    apiKey: "AIzaSyBRVXIDwu31vBOmAz4TdRuLFoMdCLiO3AU",
    authDomain: "assign-app-28550.firebaseapp.com",
    projectId: "assign-app-28550",
    storageBucket: "assign-app-28550.appspot.com",
    messagingSenderId: "330387606425",
    appId: "1:330387606425:web:91bbb6e468402a641ba108"
}

firebase.initializeApp(firebaseConfig)

export const db = firebase.database()