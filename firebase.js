import { initializeApp } from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCSPThjg1rQizJcrax-uiONtQUqHCkSivo",
  authDomain: "cloudy-e3df2.firebaseapp.com",
  projectId: "cloudy-e3df2",
  storageBucket: "cloudy-e3df2.appspot.com",
  messagingSenderId: "279595654317",
  appId: "1:279595654317:web:d44f91a02f27a457e83a24"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;