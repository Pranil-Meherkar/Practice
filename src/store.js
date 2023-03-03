import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";
import { countriesReducer } from "./redux/countries/countriesReducer";
import { composeWithDevTools } from "@redux-devtools/extension";

const store = createStore(
  countriesReducer,
  composeWithDevTools(applyMiddleware(logger, thunk))
);

export default store;
