import { doc, setDoc } from "firebase/firestore";
import { User } from "firebase/auth";
import { firestore } from "./Firebase";
import { MealsContextType } from "../contexts/mealsContext/MealsContext";
import { PlanContextType } from "../contexts/planContext/PlanContext";
import { DietPlan } from "../Models";

export const createUser = async (user: User) => {
  await setDoc(doc(firestore, "users", user.uid), {
    email: user.email,
    displayName: user.displayName,
    photoURL: user.photoURL,
  });
};

export const submitPlan = async (
  user: User,
  planMetaData: PlanContextType,
  meals: MealsContextType
) => {
  const dietPlan = new DietPlan(planMetaData, meals);
};
