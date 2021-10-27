import {combineReducers} from 'redux';
import CountryReducer from './CountryReducer';
import CartReducer from './CartReducer';

const rootReducer = () => combineReducers({
    CountryReducer, 
    CartReducer
})


export default rootReducer

