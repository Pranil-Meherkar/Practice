import {
  FETCH_DATA_REQUEST,
  FETCH_DATA_SUCESS,
  FETCH_DATA_FAILURE,
} from "./countriesTypes";
import axios from "axios";

export const fetchDataRequest = () => {
  return {
    type: FETCH_DATA_REQUEST,
  };
};

export const fetchDataSucess = (data) => {
  return {
    type: FETCH_DATA_SUCESS,
    payload: data,
  };
};

export const fetchDataFailure = (error) => {
  return {
    type: FETCH_DATA_FAILURE,
    payload: error,
  };
};

export const fetchData = () => {
  return function (dispatch) {
    dispatch(fetchDataRequest());
    fetch("https://restcountries.com/v3.1/all")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        const requiredData = data.map((item) => {
          return {
            name: item.name,
            population: item.population,
            independentStatus: item.independent,
            currencies: item.currencies,
            region: item.region,
            capital: item.capital,
            numOfLanguages: item.languages,
          };
        });
        dispatch(fetchDataSucess(requiredData));
      })
      .catch((error) => {
        console.log("error === ", error);
        dispatch(fetchDataFailure(error.message));
      });
  };
};
