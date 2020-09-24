import firebase from 'firebase'
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyACy8Kg_skFAgF6cw-E5WAOfWmFNe4TncI",
    authDomain: "keep-953d7.firebaseapp.com",
    databaseURL: "https://keep-953d7.firebaseio.com",
    projectId: "keep-953d7",
    storageBucket: "keep-953d7.appspot.com",
    messagingSenderId: "9173474545",
    appId: "1:9173474545:web:22247f3d29baeb9fbb9d50",
    measurementId: "G-PTLPB2GE9C"
  };
const firebaseApp = firebase.initializeApp(firebaseConfig);
const auth = firebaseApp.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const facebook_provider=new firebase.auth.FacebookAuthProvider();
const git_provider = new firebase.auth.GithubAuthProvider();
facebook_provider.setCustomParameters({
    'display': 'popup'
  });
  git_provider.addScope('repo');
  const db = firebase.firestore();
export {auth,provider,facebook_provider,git_provider,db};