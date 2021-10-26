export const FETCH_COUNTRY_LOADING = 'FETCH_COUNTRY_LOADING'
export const FETCH_COUNTRY_SUCCESS = 'FETCH_COUNTRY_SUCCESS'
export const FETCH_COUNTRY_FAIL = 'FETCH_COUNTRY_FAIL'

export type CountryReducerState={
    countries:[],
    isLoading:boolean,
    error:string
}

export type fetchAllCountriesAction={
    type:typeof FETCH_COUNTRY_LOADING|typeof FETCH_COUNTRY_FAIL|typeof FETCH_COUNTRY_SUCCESS
}