export type Weekday =
  | "monday"
  | "tuesday"
  | "wednesday"
  | "thursday"
  | "friday"
  | "saturday"
  | "sunday";

export type Meal = {
  idMeal: string;
  strMeal: string;
  strMealThumb: string;
};

export type MealsResponse = {
  meals: Meal[];
};

export type MealDetails = {
  idMeal: string;
  strMeal: string;
  strMealThumb: string;
  strArea: string;
  strCategory: string;
  strIngredients: string[];
  strMeasures: string[];
  strInstructions: string;
  strYoutube: string;
};

export type MealDetailsResponseElement = {
  idMeal: string;
  strArea: string;
  strCategory: string;
  strMeal: string;
  strMealThumb: string;
  strIngredient1: string;
  strIngredient2: string;
  strIngredient3: string;
  strIngredient4: string;
  strIngredient5: string;
  strIngredient6: string;
  strIngredient7: string;
  strIngredient8: string;
  strIngredient9: string;
  strInstructions: string;
  strMeasure1: string;
  strMeasure2: string;
  strMeasure3: string;
  strMeasure4: string;
  strMeasure5: string;
  strMeasure6: string;
  strMeasure7: string;
  strMeasure8: string;
  strMeasure9: string;
  strYoutube: string;
};

export type MealDetailsResponse = {
  meals: MealDetailsResponseElement[];
};

export type FetchInfo = {
  a?: string;
  c?: string;
  i?: string;
};

export type Category = {
  strCategory: string;
};

export type DietPlan = {
  planID?: string;
  userID: string;
  planName: string;
  mealsCount: number | string;
  mealNames: string[];
  monday: Meal[];
  tuesday: Meal[];
  wednesday: Meal[];
  thursday: Meal[];
  friday: Meal[];
  saturday: Meal[];
  sunday: Meal[];
};
