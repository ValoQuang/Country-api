import { FETCH_COUNTRY_SUCCESS,FETCH_COUNTRY_LOADING, FETCH_COUNTRY_FAIL} from "../../types/CountryTypes"
import { CountryActions } from "../../types/CountryTypes"
import axios from "axios";

export  function fetchAllCountriesLoading():CountryActions{
    return {
        type: FETCH_COUNTRY_LOADING
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

const URL = 'https://restcountries.com/v2/all';

export function fetchAllCountries() {
    return (dispatch:any)=> {
        //run when loading
        dispatch(fetchAllCountriesLoading());
        //now fetch
        axios.get(URL)
        .then(res => {
            const countries = res.data;
            dispatch(fetchAllCountriesSuccess(countries));
            console.log(countries)
        })
        .catch(err => {
            dispatch(fetchAllCountriesFail(err));
        });
    };
};