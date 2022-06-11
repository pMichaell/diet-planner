import {
  addDoc,
  collection,
  doc,
  getDocs,
  query,
  setDoc,
  where,
  deleteDoc,
} from "firebase/firestore";
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
  const dietPlan: DietPlan = {
    userID: user.uid,
    planName: planMetaData.planName,
    mealsCount: planMetaData.mealsCount,
    mealNames: planMetaData.mealNames,
    monday: meals.monday,
    tuesday: meals.tuesday,
    wednesday: meals.wednesday,
    thursday: meals.thursday,
    friday: meals.friday,
    sunday: meals.sunday,
    saturday: meals.saturday,
  };

  if (planMetaData.planID !== "") {
    await setDoc(doc(firestore, "plans", planMetaData.planID), dietPlan);
    return;
  }

  await addDoc(collection(firestore, "plans"), dietPlan);
};

export const fetchUserPlans = async function fetchUserPlans(
  user: User
): Promise<DietPlan[]> {
  const q = query(
    collection(firestore, "plans"),
    where("userID", "==", user.uid)
  );

  return new Promise<DietPlan[]>(async (resolve, reject) => {
    try {
      const querySnapshot = await getDocs(q);
      const dietPlans = querySnapshot.docs.map((document) => {
        return {
          planID: document.id,
          ...document.data(),
        };
      }) as DietPlan[];
      resolve(dietPlans);
    } catch (e) {
      reject(e);
    }
  });
};

export const deletePlan = async function deletePlan(planID: string) {
  await deleteDoc(doc(firestore, "plans", planID));
};
