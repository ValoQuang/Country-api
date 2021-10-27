import {ADD_CART, REMOVE_CART, CartActions, CartReducerState} from "../../types";

//initstate 
const initState:CartReducerState = {
    
    cart:[]
}

export default function cartReducer (state=initState,action:CartActions):CartReducerState{
    switch(action.type) {
        //adding country
        case ADD_CART: {
            const country = action.payload 
                return {
                    ...state,
                    cart:[...state.cart,country]
                }
        }
        case REMOVE_CART: {
            const payloadCountry = action.payload
            const tempCart = state.cart.filter((country)=>country !== payloadCountry)
                return {
                    ...state,
                    cart:[...tempCart]
                }
        }   
        default: return state;
    }
}
