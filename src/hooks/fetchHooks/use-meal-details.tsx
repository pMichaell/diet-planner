import { useEffect, useState } from "react";
import { MealDetails, MealDetailsResponse } from "../../Models";
import axios, { AxiosRequestConfig } from "axios";
import { convertResponse } from "../../utils/Utils";

const options: AxiosRequestConfig = {
  method: "GET",
  url: "https://themealdb.p.rapidapi.com/lookup.php",
  headers: {
    "X-RapidAPI-Host": "themealdb.p.rapidapi.com",
    "X-RapidAPI-Key": process.env.REACT_APP_RAPID_API_KEY ?? "",
  },
};

const useMealDetails = (
  mealId: string
): [MealDetails | null, boolean | null] => {
  const [mealDetails, setMealDetails] = useState<MealDetails | null>(null);
  const [error, setError] = useState<boolean | null>(null);

  useEffect(() => {
    options.params = { i: mealId };

    const fetchData = async () => {
      try {
        const response = await axios.request<MealDetailsResponse>(options);
        const responseData = response.data.meals[0];
        const converted = convertResponse(responseData);
        setMealDetails(converted);
      } catch (e) {
        setError(true);
      }
    };

    fetchData();
  });

  return [mealDetails, error];
};

export default useMealDetails;
