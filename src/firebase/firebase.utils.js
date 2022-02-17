// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import "firebase/compat/auth";
import "firebase/compat/firestore";
import { getAnalytics } from "firebase/analytics";

// Your web app's Firebase configuration
const config = {
  apiKey: "AIzaSyDQxGW78aUAbKDAih7E_ZE5Zhrtk1niYo4",
  authDomain: "etude-32e44.firebaseapp.com",
  projectId: "etude-32e44",
  storageBucket: "etude-32e44.appspot.com",
  messagingSenderId: "420933792764",
  appId: "1:420933792764:web:6c227cdf559f9ac34f7879",
};

export const createUserProfilDocument = async (
  userAuth,
  type,
  additionalData
) => {
  if (!userAuth) return;

  let userRef;

  if (type === "medecin") {
    userRef = firestore.doc(`medecins/${userAuth.uid}`);
  } else {
    userRef = firestore.doc(`admins/${userAuth.uid}`);
  }

  const snapshot = await userRef.get();

  if (!snapshot.exists) {
    const { email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        email,
        type,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }

  return userRef;
};
export const addingInformationsPatient = async (userAuth, patient, Data) => {
  if (!userAuth) return;

  const patientRef = firestore.doc(
    `medecins/${userAuth.uid}/patients/${patient.idpatient}/`
  );
  try {
    await patientRef.set(
      {
        ...Data,
      },
      { merge: true }
    );
  } catch (error) {
    console.log("error creating user", error.message);
  }

  return patientRef;
};

// Initialize Firebase
const app = firebase.initializeApp(config);
const analytics = getAnalytics(app);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

export const app2 = firebase.initializeApp(config, "secondary");

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account",
});

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
