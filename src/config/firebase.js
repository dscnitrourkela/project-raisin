import { initializeApp } from 'firebase/app';

const firebaseConfig = {
  apiKey: 'AIzaSyDZnqFdSVjs_n7cmq5vUxW9D44xq23Dg-s',
  authDomain: 'inno-demo-c9930.firebaseapp.com',
  projectId: 'inno-demo-c9930',
  storageBucket: 'inno-demo-c9930.appspot.com',
  messagingSenderId: '769561537856',
  appId: '1:769561537856:web:7cb3be5a84ed5ca917dea5',
  measurementId: 'G-JND7HMC7HL',
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
