// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCGLB3RUmZm6jo2apsVFStVTMxX8ITjvyw",
  authDomain: "fire-app-2020.firebaseapp.com",
  databaseURL: "https://fire-app-2020.firebaseio.com",
  projectId: "fire-app-2020",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.firestore();
const func = firebase.functions();
