import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyAHSpJLHxX5YEvLDXKXCGruYcf13zFRHM4',
  authDomain: 'ztm-e-shop-sample.firebaseapp.com',
  databaseURL: 'https://ztm-e-shop-sample.firebaseio.com',
  projectId: 'ztm-e-shop-sample',
  storageBucket: 'ztm-e-shop-sample.appspot.com',
  messagingSenderId: '544840002272',
  appId: '1:544840002272:web:e0a618f5647c9beef77e85',
  measurementId: 'G-V8EC5F9H4R',
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
