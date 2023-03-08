import { COUNTRIES_TYPES } from "./countriesTypes";

const initialState = {
  loading: false,
  data: [],
  error: "",
  cardsPerPage: 10,
  currentPage: 1,
  modal: {
    showModal: false,
    modalData: {},
  },
};

export const countriesReducer = (state = initialState, action) => {
  switch (action.type) {
    case COUNTRIES_TYPES.FETCH_DATA_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case COUNTRIES_TYPES.FETCH_DATA_SUCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
        error: "",
      };
    case COUNTRIES_TYPES.FETCH_DATA_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case COUNTRIES_TYPES.SET_CURRENT_PAGE:
      return {
        ...state,
        currentPage: action.payload,
      };
    case COUNTRIES_TYPES.SET_CARDS_PER_PAGE:
      return {
        ...state,
        cardsPerPage: action.payload,
      };
    case COUNTRIES_TYPES.SET_MODAL_DATA:
      return {
        ...state,
        modal: {
          showModal: true,
          modalData: action.payload,
        },
      };
    case COUNTRIES_TYPES.HIDE_MODAL:
      return {
        ...state,
        modal: {
          showModal: false,
          modalData: {},
        },
      };

    default:
      return state;
  }
};
