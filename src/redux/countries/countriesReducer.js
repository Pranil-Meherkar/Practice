import {
  FETCH_DATA_REQUEST,
  FETCH_DATA_SUCESS,
  FETCH_DATA_FAILURE,
} from "./countriesTypes";

const initialState = {
  loading: false,
  data: [],
  error: "",
};

export const countriesReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DATA_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_DATA_SUCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
      };
    case FETCH_DATA_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
