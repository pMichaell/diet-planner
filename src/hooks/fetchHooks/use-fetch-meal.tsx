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

  console.log("useFetchMeal runs");

  useEffect(() => {
    options.params = JSON.parse(localStorage.getItem("fetchInfo") ?? "");

    const fetchData = async () => {
      try {
        const response = await axios.request<MealResponse>(options);
        setMeals(response.data.meals);
      } catch (e) {
        setError(true);
      }
    };

    fetchData();
  }, []);

  return [meals, error];
};

export default useFetchMeal;
