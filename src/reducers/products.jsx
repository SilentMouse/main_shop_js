import * as types from '../constants/productsTypes';

const initialState = {
    products: [],
    current_product: {},
}

export default function products(state = initialState, action) {
    switch (action.type) {
        case types.SET_PRODUCTS:
            console.log(types.SET_PRODUCTS);
            return Object.assign({},state,{products: action.products})
        case types.SET_PRODUCT:
            console.log(types.SET_PRODUCT);
            return Object.assign({},state,{current_product: action.product})
        default:
            return state
    }
}