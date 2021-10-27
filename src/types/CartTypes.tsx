export const ADD_CART = 'ADD_CART'
export const REMOVE_CART = 'REMOVE_CART'

export type CartCountry={
}

export type CartReducerState = {
    cart:CartCountry[],
}

export type AddCountryToCartAction={
    type:typeof ADD_CART
    payload:CartCountry
}

export type RemoveCountryToCartAction={
    type:typeof REMOVE_CART
    payload:CartCountry
}

export type CartActions = AddCountryToCartAction|RemoveCountryToCartAction