import { initializeApp } from "@firebase/app";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAAUNHwNwssFKobDH3LDUIOxwC7YVzuJKE",
  authDomain: "fastfood-3f7c1.firebaseapp.com",
  projectId: "fastfood-3f7c1",
  storageBucket: "fastfood-3f7c1.appspot.com",
  messagingSenderId: "648610218469",
  appId: "1:648610218469:web:64458ebd42f945fc936f0c",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
