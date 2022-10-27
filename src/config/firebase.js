import { initializeApp } from 'firebase/app';

const firebaseConfig = {
  apiKey: process.env.GATSBY_Api_Key,
  authDomain: process.env.GATSBY_Auth_Domain,
  projectId: process.env.GATSBY_Project_Id,
  storageBucket: process.env.GATSBY_Storage_Bucket,
  messagingSenderId: process.env.GATSBY_Messaging_Sender_Id,
  appId: process.env.GATSBY_App_Id,
  measurementId: process.env.GATSBY_Measurement_Id,
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
