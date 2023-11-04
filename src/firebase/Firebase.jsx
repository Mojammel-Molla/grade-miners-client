// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyAqm7h7u9eeSaW_jH6g1nmw0dwRxAXFmPM',
  authDomain: 'grade-miners.firebaseapp.com',
  projectId: 'grade-miners',
  storageBucket: 'grade-miners.appspot.com',
  messagingSenderId: '818670722797',
  appId: '1:818670722797:web:1648f16da764b5805476e4',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
