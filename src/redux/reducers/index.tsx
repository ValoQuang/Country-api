import {combineReducers} from 'redux';
import CountryReducer from './CountryReducer';
import CartReducer from './CartReducer';

const rootReducer = () =>
  combineReducers({
    
    CartReducer,
    CountryReducer
  })


export default rootReducer

