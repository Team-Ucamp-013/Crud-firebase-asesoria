
import { initializeApp } from "firebase/app";
import { getFirestore} from "firebase/firestore";

const firebaseConfig = {
  apiKey: import.meta.env.DB_PASSWORD,
  authDomain: "fir-prueba-e0b58.firebaseapp.com",
  projectId: "fir-prueba-e0b58",
  storageBucket: "fir-prueba-e0b58.appspot.com",
  messagingSenderId: "138928575498",
  appId: "1:138928575498:web:2ed2175f15c8700e573bf3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app)

export{db}

