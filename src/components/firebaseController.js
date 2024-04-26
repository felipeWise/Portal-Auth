import * as FirebaseApp from 'firebase/app'
import * as FirebaseAuth from 'firebase/auth'

const FIREBASE_CONFIG = {
  apiKey: `${process.env.REACT_APP_API_KEY}`,
  authDomain: `${process.env.REACT_APP_AUTH_DOMAIN}`,
  projectId: `${process.env.REACT_APP_PROJECT_ID}`,
  storageBucket: `${process.env.REACT_APP_STORAGE_BUCKET}`,
  messagingSenderId: `${process.env.REACT_APP_MESSAGING_SENDER_ID}`,
  appId: `${process.env.REACT_APP_APP_ID}`,
  };

const FIREBASE_APP = FirebaseApp.initializeApp(FIREBASE_CONFIG)

export function signIn(email, password){
  return FirebaseAuth.signInWithEmailAndPassword(
    FirebaseAuth.getAuth(),
    email,
    password,
  )
}

export function signUp(email, password){
  return FirebaseAuth.createUserWithEmailAndPassword(
    FirebaseAuth.getAuth(),
    email,
    password,
  )
}

export function resetPassword(email){
  return FirebaseAuth.sendPasswordResetEmail(
    FirebaseAuth.getAuth(),
    email,
  )
}