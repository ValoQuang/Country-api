import { ADD_CART, REMOVE_CART, CartActions} from "../../types/CartTypes"

//add cart
export  function addCountryToCart(country:{}):CartActions{
    return {
        type: ADD_CART,
        payload:country
    }
}
//remove cart
export function removeCountryToCart(country:{}):CartActions{
    return {
        type: REMOVE_CART,
        payload: country
    }
}
