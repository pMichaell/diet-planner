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

/*const dietPlanConverter: FirestoreDataConverter<DietPlan> = {
  toFirestore: (dietPlan) => dietPlan,

  fromFirestore: (snapshot, options): DietPlan => {
    const data = snapshot.data(options);
    return {
      planName: data?.planName,
      mealsCount: data?.mealsCount,
      mealNames: data?.mealNames,
      monday: data?.monday,
      tuesday: data?.tuesday,
      wednesday: data?.wednesday,
      thursday: data?.thursday,
      friday: data?.friday,
      sunday: data?.sunday,
      saturday: data?.saturday,
    };
  },
};*/

export const submitPlan = async (
  user: User,
  planMetaData: PlanContextType,
  meals: MealsContextType
) => {
  console.log("plan submit run");

  const dietPlan: DietPlan = {
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

  await setDoc(doc(firestore, "plans", user.uid), dietPlan);
};
