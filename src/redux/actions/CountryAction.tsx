import { FETCH_COUNTRY_SUCCESS,FETCH_COUNTRY_LOADING, FETCH_COUNTRY_FAIL, fetchAllCountriesAction } from "../../types/CountryTypes"


export  function fetchAllCountries():fetchAllCountriesAction{
    return {
        type: FETCH_COUNTRY_LOADING, 
    }
}

export function fetchAllCountriesSuccess(countries:[]):any{
    return {
        type: FETCH_COUNTRY_SUCCESS, 
        payload:countries
    }
}

export function fetchAllCountriesFail(error:string):any{
    return {
        type: FETCH_COUNTRY_FAIL, 
    }
}
