export type Notification = {
  text: string;
};

export type Weekday =
  | "MONDAY"
  | "TUESDAY"
  | "WEDNESDAY"
  | "THURSDAY"
  | "FRIDAY"
  | "SATURDAY"
  | "SUNDAY";

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
  [mealName: string]: Meal;
};
