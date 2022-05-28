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

export type MealResponse = {
  meals: Meal[];
};

export type FetchInfo = {
  a?: string;
  c?: string;
  i?: string;
};

export type Category = {
  strCategory: string;
};

export type Region = {
  strRegion: string;
};

export type PickMode = "Region" | "Category" | "Ingredient";
