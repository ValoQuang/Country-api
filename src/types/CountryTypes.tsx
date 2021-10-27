export const FETCH_COUNTRY_LOADING = 'FETCH_COUNTRY_LOADING'
export const FETCH_COUNTRY_SUCCESS = 'FETCH_COUNTRY_SUCCESS'
export const FETCH_COUNTRY_FAIL = 'FETCH_COUNTRY_FAIL'



export type CountryReducerState={
    countries:any[],
    isLoading:boolean,
    error:string
}



export type CountryInfoProps={
    flag:string
    name:string 
    region:string 
    population:number 
    capital:string
    languages:[{name:string}]
    countries:[]
    onClick: Function
}

export type fetchAllCountriesAction={
    type:typeof FETCH_COUNTRY_LOADING|typeof FETCH_COUNTRY_FAIL|typeof FETCH_COUNTRY_SUCCESS
    payload?:string
}

export type fetchAllCountriesActionSuccess={
    type:typeof FETCH_COUNTRY_SUCCESS
    payload?:[]
}

export type fetchAllCountriesActionFail={
    type:typeof FETCH_COUNTRY_FAIL
    payload?:string
}

export type CountryActions =
    fetchAllCountriesAction|fetchAllCountriesActionSuccess|fetchAllCountriesActionFail
