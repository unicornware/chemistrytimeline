import * as firebase from "firebase";

const FIREBASE_API_KEY = "AIzaSyDoSCCXRpli0qtxehH286WY8sQECodtUKw";
const FIREBASE_AUTH_DOMAIN = "acs-chemistrytimeline.firebaseapp.com";
const FIREBASE_PROJECT_ID = "acs-chemistrytimeline";

const config = {
  apiKey: FIREBASE_API_KEY,
  authDomain: FIREBASE_AUTH_DOMAIN,
  projectId: FIREBASE_PROJECT_ID
};

if (!firebase.apps.length) {
  firebase.initializeApp(config);
}
