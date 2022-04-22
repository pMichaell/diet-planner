import {
  addDoc,
  collection,
  doc,
  getDoc,
  getDocs,
  query,
  runTransaction,
  setDoc,
  Timestamp,
  where,
} from "firebase/firestore";
import { User } from "firebase/auth";
import { firestore } from "./Firebase";

export const createUser = async (user: User) => {
  const userDocRef = doc(firestore, "users", user.uid);
  await runTransaction(firestore, async (transaction) => {
    const userDoc = await transaction.get(userDocRef);
    if (userDoc.exists()) return;
    await setDoc(userDocRef, {
      email: user.email,
      displayName: user.displayName,
      photoURL: user.photoURL,
    });
  });
};
