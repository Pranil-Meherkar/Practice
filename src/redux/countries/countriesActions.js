import { COUNTRIES_TYPES } from "./countriesTypes";

export const fetchDataRequest = () => {
  return {
    type: COUNTRIES_TYPES.FETCH_DATA_REQUEST,
  };
};

export const fetchDataSucess = (data) => {
  return {
    type: COUNTRIES_TYPES.FETCH_DATA_SUCESS,
    payload: data,
  };
};

export const fetchDataFailure = (error) => {
  return {
    type: COUNTRIES_TYPES.FETCH_DATA_FAILURE,
    payload: error,
  };
};

export const setCurrentPage = (number) => {
  return {
    type: COUNTRIES_TYPES.SET_CURRENT_PAGE,
    payload: number,
  };
};

export const setCardsPerPage = (number) => {
  return {
    type: COUNTRIES_TYPES.SET_CARDS_PER_PAGE,
    payload: number,
  };
};

export const setModalData = (data) => {
  return {
    type: COUNTRIES_TYPES.SET_MODAL_DATA,
    payload: data,
  };
};

export const hideModal = () => {
  return {
    type: COUNTRIES_TYPES.HIDE_MODAL,
  };
};

export const fetchData = () => {
  return function (dispatch) {
    dispatch(fetchDataRequest());
    fetch("https://restcountries.com/v3.1/all")
      .then((response) => response.json())
      .then((data) => {
        const requiredData = data.map((item) => {
          return {
            name: item.name,
            population: item.population,
            independentStatus: item.independent,
            currencies: item.currencies,
            region: item.region,
            capital: item.capital,
            numOfLanguages: item.languages,
            map: item.maps.googleMaps,
            flag: { src: item.flags.png, alt: item.flags.alt },
            timezones: item.timezones,
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

// export const fetchData = () => {
//   return function (dispatch) {
//     dispatch(fetchDataRequest());
//     fetch("https://restcountries.com/v3.1/all")
//       .then((response) => response.json())
//       .then((countries) => {
//         const data = countries.map((item) => {
//           return {
//             name: item.name,
//             population: item.population,
//             independentStatus: item.independent,
//             currencies: item.currencies,
//             region: item.region,
//             capital: item.capital,
//             numOfLanguages: item.languages,
//           };
//         });
//         let i = 0;
//         let newData = [];
//         while (i < data.length) {
//           let temp = [];
//           for (let j = i; j < data.length && j < i + 4; j++) {
//             temp.push(data[j]);
//           }
//           newData.push(temp);
//           i += 3;
//         }
//         // console.log("newdata ===>", newData);
//         dispatch(fetchDataSucess(newData));
//       })
//       .catch((error) => dispatch(fetchDataFailure(error)));
//   };
// };
