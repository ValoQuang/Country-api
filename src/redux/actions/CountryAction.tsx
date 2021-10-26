import { FETCH_COUNTRY_SUCCESS,FETCH_COUNTRY_LOADING, FETCH_COUNTRY_FAIL, fetchAllCountriesAction } from "../../types/CountryTypes"
import { CountryActions } from "../../types/CountryTypes"

export  function fetchAllCountries():CountryActions{
    return {
        type: FETCH_COUNTRY_LOADING, 
    }
}

export function fetchAllCountriesSuccess(countries:[]):CountryActions{
    return {
        type: FETCH_COUNTRY_SUCCESS, 
        payload:countries
    }
}

export function fetchAllCountriesFail(error:string):CountryActions{
    return {
        type: FETCH_COUNTRY_FAIL, 
        payload:error
    }
}
