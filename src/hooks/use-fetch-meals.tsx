import { Meal, PickMode } from "../Models";
import { AxiosRequestConfig } from "axios";

const options: AxiosRequestConfig = {
  method: "GET",
  url: "https://themealdb.p.rapidapi.com/filter.php",
  headers: {
    "X-RapidAPI-Host": "themealdb.p.rapidapi.com",
    "X-RapidAPI-Key": process.env.REACT_APP_RAPID_API_KEY || "",
  },
};

const fetchData = async function (
  mode: PickMode,
  fetchParam: string
): Promise<Meal[]> {
  options.params = {};
  return new Array<Meal>();
};

const useFetchMeals = ({
  mode,
  fetchParam,
}: {
  mode: PickMode;
  fetchParam: string;
}) => {};

export default useFetchMeals;
