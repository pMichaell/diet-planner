export type Weekday =
  | "monday"
  | "tuesday"
  | "wednesday"
  | "thursday"
  | "friday"
  | "saturday"
  | "sunday";

export type Meal = {
  idMeal: number;
  strMeal: string;
  strMealThumb: string;
};

//measure on some index corresponds
//to ingredient on the same index in
//ingredients array
export type MealDetails = {
  meal: Meal;
  strArea: string;
  strCategory: string;
  strIngredients: string[];
  strMeasures: string[];
  strInstructions: string;
  strTags: string;
  strYoutube: string;
};

export type PlanDay = {
  [mealName: string]: Meal | null;
};

export type Plan = {
  monday: Meal[];
  tuesday: Meal[];
  wednesday: Meal[];
  thursday: Meal[];
  friday: Meal[];
  saturday: Meal[];
  sunday: Meal[];
};
