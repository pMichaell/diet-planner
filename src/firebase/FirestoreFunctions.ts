import { doc, setDoc } from "firebase/firestore";
import { User } from "firebase/auth";
import { firestore } from "./Firebase";

export const createUser = async (user: User) => {
  await setDoc(doc(firestore, "users", user.uid), {
    email: user.email,
    displayName: user.displayName,
    photoURL: user.photoURL,
  });
};
