import PlanContext, { PlanContextType } from "./PlanContext";
import { ReactNode, useEffect, useState } from "react";

const PlanContextProvider = ({ children }: { children: ReactNode }) => {
  const [planState, setPlanState] = useState<PlanContextType>({
    planName: "",
    mealsCount: 0,
    mealNames: [],
  });

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

    setPlanState((prevState) => {
      return {
        ...prevState,
        planName,
        mealsCount,
        mealNames,
      };
    });
  }, []);

  return (
    <PlanContext.Provider value={planState}>{children}</PlanContext.Provider>
  );
};

export default PlanContextProvider;
