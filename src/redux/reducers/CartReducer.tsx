import {ADD_CART, REMOVE_CART, CartActions, CartReducerState} from "../../types";


//initialize cart
const cartFromLocal= localStorage.getItem('cart')
let initialCart:[]=[]
if(cartFromLocal){
    initialCart=JSON.parse(cartFromLocal)
}
const initState:CartReducerState={
    cart:initialCart
}

export default function cartReducer (state:CartReducerState=initState, action:CartActions):CartReducerState{
    switch(action.type) {
        //adding country
        case ADD_CART: {
            const country=action.payload  
            //save cart country to localstorage
            const cartCountry= [...state.cart, country]
            localStorage.setItem('cart',JSON.stringify(cartCountry))           
            return {
                ...state, 
                cart:[...state.cart, country]
                }
        }
        case REMOVE_CART: {
            const paylodCountry=action.payload
            const tempCart=state.cart.filter(country=>country!==paylodCountry)
            //save cart country to localstorage
            const cartCountry= [...tempCart]
            localStorage.setItem('cart',JSON.stringify(cartCountry))  
            return {
                ...state, 
                cart:[...tempCart]
            }
        }   
        default: return state;
    }
}
