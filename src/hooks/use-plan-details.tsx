import { useEffect, useState } from "react";

const usePlanDetails = () => {
  const [planName, setPlanName] = useState("");
  const [mealsCount, setMealsCount] = useState(0);
  const [mealNames, setMealNames] = useState<string[]>([]);

  useEffect(() => {
    const getMealsCount = function getMealsCount(): number {
      const saved = localStorage.getItem("mealsCount");
      if (saved) {
        let variable = JSON.parse(saved);
        return variable.length === 0 ? 0 : Number(variable);
      }
      return 0;
    };

    const planName = (localStorage.getItem("planName") as string) ?? "";
    const mealsCount = getMealsCount();
    const mealNames = JSON.parse(localStorage.getItem("mealNames") as string);
    setPlanName(planName);
    setMealsCount(mealsCount);
    setMealNames(mealNames);
  }, []);

  return { planName, mealsCount, mealNames };
};

export default usePlanDetails;
