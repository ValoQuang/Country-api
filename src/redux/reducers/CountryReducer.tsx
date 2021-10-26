import {CountryReducerState, FETCH_COUNTRY_LOADING, FETCH_COUNTRY_SUCCESS, FETCH_COUNTRY_FAIL } from "../../types/CountryTypes";

const initState:CountryReducerState ={
    countries:[],
    isLoading:false,
    error:''
}

export default function CountryReducer(state:CountryReducerState =initState,action:any) {
    switch(action.type) {
        case FETCH_COUNTRY_LOADING:
            return {...state,
                isLoading:true
            }
        case FETCH_COUNTRY_SUCCESS:
            return {...state,
                isLoading:false,
                error:'',
                countries:action.payload
            }
        case FETCH_COUNTRY_FAIL:
            return {...state,
                isLoading:false,
                error:action.payload
            }
        default:
            return state
    }
}