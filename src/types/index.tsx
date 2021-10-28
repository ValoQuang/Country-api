import {CountryReducerState} from "./CountryTypes";
import {CartReducerState} from "./CartTypes";
export * from './CountryTypes';
export * from './CartTypes';

export type AppState = {
    CountryReducer:CountryReducerState    
    
}
export type CartState = {
    
    CartReducer:CartReducerState
}

