import { combineReducers } from "redux";
import { countriesReducer } from "./redux/countries/countriesReducer";


export const rootReducer = combineReducers({
    countries:countriesReducer
})