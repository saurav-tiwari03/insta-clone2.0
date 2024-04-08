import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDGvyebVxly6b8tdMjEmqOnlJohmJ4r7vY",
  authDomain: "emailpasswordlogin-ae0ad.firebaseapp.com",
  databaseURL: "https://emailpasswordlogin-ae0ad-default-rtdb.firebaseio.com",
  projectId: "emailpasswordlogin-ae0ad",
  storageBucket: "emailpasswordlogin-ae0ad.appspot.com",
  messagingSenderId: "812893136140",
  appId: "1:812893136140:web:6842e4f6fb5621e6f25529",
  measurementId: "G-MQ9X2KFG6G"
};

const app = initializeApp(firebaseConfig);

export {app};
