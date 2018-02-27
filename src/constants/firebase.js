import * as firebase from 'firebase';

const config = {
  apiKey: "AIzaSyB4A8BMdNm_6l4coXFO5txGqdOJ2JmOHa8",
  authDomain: "reactblog-65b17.firebaseapp.com",
  databaseURL: "https://reactblog-65b17.firebaseio.com",
  projectId: "reactblog-65b17",
  storageBucket: '',
  messagingSenderId: "995756090207"
};

firebase.initializeApp(config)

export const ref = firebase.database().ref()
export const database = firebase.database
export const postsRef = firebase.database().ref('posts');
