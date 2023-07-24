import { initializeApp } from 'firebase/app';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';

const firebaseConfig = {
  // firebase 설정과 관련된 개인 정보
  // apiKey: import.meta.env.VITE_APP_API_KEY,
  // authDomain: import.meta.env.VITE_APP_AUTH_DOMAIN,
  // projectId: import.meta.env.VITE_APP_PROJECT_ID,
  // storageBucket: import.meta.env.VITE_APP_TORAGE_BUCKET,
  // messagingSenderId: import.meta.env.VITE_APP_MESSAGING_SENDER_ID,
  // appId: import.meta.env.VITE_APP_API_ID,
  // measurementId: import.meta.env.VITE_APP_MEASUREMENT_ID
  apiKey: "AIzaSyC1OyfyL3H3O1223QicG1OXClDkDiPbbX8",
  authDomain: "couple-theple-project.firebaseapp.com",
  projectId: "couple-theple-project",
  storageBucket: "couple-theple-project.appspot.com",
  messagingSenderId: "1006499136630",
  appId: "1:1006499136630:web:eba4fbe9ff55631e96cb57",
  measurementId: "G-BW3VPNY4ZG"
};

// firebaseConfig 정보로 firebase 시작
const firebaseApp = initializeApp(firebaseConfig);
const firebaseAuth = getAuth(firebaseApp);

export { firebaseAuth , createUserWithEmailAndPassword, signInWithEmailAndPassword};