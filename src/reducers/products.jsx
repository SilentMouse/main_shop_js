import * as types from '../constants/productsTypes';

const initialState = {
    products: [],
}

export default function products(state = initialState, action) {
    switch (action.type) {
        case types.SET_PRODUCTS:
            console.log(types.SET_PRODUCTS);
            return Object.assign({},state,{products: action.products})
        default:
            return state
    }
}