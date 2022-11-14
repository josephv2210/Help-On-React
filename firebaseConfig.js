import { initializeApp } from 'firebase/app';
import { getAuth } from "firebase/auth";

// Optionally import the services that you want to use
// import {...} from "firebase/auth";
// import {...} from "firebase/database";
// import {...} from "firebase/firestore";
// import {...} from "firebase/functions";
// import {...} from "firebase/storage";


import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDAC-zFYw2WuU8gJrAfbsgA-h1uRbIhrZU",
  authDomain: "ulibre-app.firebaseapp.com",
  databaseURL: "https://ulibre-app-default-rtdb.firebaseio.com",
  projectId: "ulibre-app",
  storageBucket: "ulibre-app.appspot.com",
  messagingSenderId: "255771733524",
  appId: "1:255771733524:web:869bdc24b4fb4bd1158101"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);