import { setCountries, selectedCountries, removeSelectedCountries } from "../actions/countryActions";
import { ActionTypes } from "../constant/action-type";

const initState = {
    countries: [{
        id:1,
        title: "VIetnam",
        population: 13214124132
    }]
}

export const countriesReducer = (state = initState, {type, payload}:any) => {
    switch(type) {
        case ActionTypes.SET_COUNTRIES:
            return state;


            break;

        default:
            return state;
            break;
    }
}