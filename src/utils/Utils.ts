import { MealDetails, MealDetailsResponseElement } from "../Models";

const strMeasureRegex = new RegExp("strMeasure[1-9]");
const strIngredientRegex = new RegExp("strIngredient[1-9]");

export const convertResponse = function convertResponse(
  fetchedMeal: MealDetailsResponseElement
): MealDetails {
  let ingredients: string[] = [];
  let measures: string[] = [];

  for (let property in fetchedMeal) {
    if (
      fetchedMeal[property as keyof MealDetailsResponseElement] !== null &&
      fetchedMeal[property as keyof MealDetailsResponseElement] !== ""
    ) {
      if (strIngredientRegex.test(property)) {
        ingredients.push(
          fetchedMeal[property as keyof MealDetailsResponseElement]
        );
      }
      if (strMeasureRegex.test(property)) {
        measures.push(
          fetchedMeal[property as keyof MealDetailsResponseElement]
        );
      }
    }
  }

  return {
    idMeal: fetchedMeal.idMeal,
    strMeal: fetchedMeal.strMeal,
    strMealThumb: fetchedMeal.strMealThumb,
    strArea: fetchedMeal.strArea,
    strCategory: fetchedMeal.strCategory,
    strIngredients: ingredients,
    strMeasures: measures,
    strInstructions: fetchedMeal.strInstructions,
    strYoutube: fetchedMeal.strYoutube,
  };
};
