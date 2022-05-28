import axios, { AxiosRequestConfig } from "axios";
import { useEffect, useState } from "react";
import { Meal, MealResponse } from "../../Models";

const options: AxiosRequestConfig = {
  method: "GET",
  url: "https://themealdb.p.rapidapi.com/filter.php",
  headers: {
    "X-RapidAPI-Host": "themealdb.p.rapidapi.com",
    "X-RapidAPI-Key": process.env.REACT_APP_RAPID_API_KEY || "",
  },
};

const useFetchMeal = () => {
  const [meals, setMeals] = useState<Meal[]>([]);
  const [error, setError] = useState<boolean | null>(null);

  useEffect(() => {
    const fetchInfo = JSON.parse(localStorage.getItem("fetchInfo") ?? "");

    if (fetchInfo === "") {
      throw new Error("Something Went Wrong");
    }

    options.params = fetchInfo;

    const fetchData = async () => {
      try {
        const response = await axios.request<MealResponse>(options);
        const meals = response.data.meals;
        setMeals(meals);
        localStorage.setItem("fetchedMeals", JSON.stringify(meals));
      } catch (e) {
        setError(true);
      }
    };

    if (localStorage.getItem("fetchedMeals") !== null) {
      const cachedMeals: Meal[] = JSON.parse(
        localStorage.getItem("fetchedMeals") ?? ""
      );
      setMeals(cachedMeals);
      return;
    }

    fetchData();
  }, []);

  return [meals, error];
};

export default useFetchMeal;
