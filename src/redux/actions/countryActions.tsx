import { ActionTypes } from "../constant/action-type"

export const setCountries = (countries:any) => ({
    type: ActionTypes.SET_COUNTRIES,
    payload: countries
});

export const selectedCountries = (country:any) => {
    //country is result from mapfunction of countries
    return {
        type: ActionTypes.SELECTED_COUNTRIES,
        payload: country
    };
};

export const removeSelectedCountries = (countries:any) => {
    //
    return {
        type: ActionTypes.REMOVE_SELECTED_COUNTRIES,
        payload: countries
    };
};