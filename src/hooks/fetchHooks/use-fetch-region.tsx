import classes from "./use-fetch-region.module.css";
import axios, { Axios, AxiosRequestConfig } from "axios";
import { useEffect } from "react";

const options: AxiosRequestConfig = {
  method: "GET",
  url: "https://themealdb.p.rapidapi.com/filter.php",
  headers: {
    "X-RapidAPI-Host": "themealdb.p.rapidapi.com",
    "X-RapidAPI-Key": "2b78b914femshec0f550e8473fcbp16e5e3jsncbe85eca22c6",
  },
};

// params: {c: 'Seafood'}

const useFetchRegion = () => {
  useEffect(() => {});

  return <></>;
};

export default useFetchRegion;
