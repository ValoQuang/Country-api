import { combineReducers } from "redux";
import { countriesReducer } from "./countriesReducer";

export const reducers = combineReducers({
    allCountries : countriesReducer,
})