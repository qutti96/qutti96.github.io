import firebase from 'firebase'

const firebaseConfig = {
  apiKey: 'AIzaSyAep5IxbyQGNoYlRQbjRpJtZgXwY7ew7us',
  authDomain: 'github-io-contact-form.firebaseapp.com',
  databaseURL: 'https://github-io-contact-form.firebaseio.com',
  projectId: 'github-io-contact-form',
  storageBucket: 'github-io-contact-form.appspot.com',
  messagingSenderId: '907678159235',
  appId: '1:907678159235:web:0376806c27bc57aaaa26b6',
  measurementId: 'G-5RZMTNPFE0',
}

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig)
}

export const functions = firebase.functions()
