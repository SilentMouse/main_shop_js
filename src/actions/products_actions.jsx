import * as types from '../constants/productsTypes';

export const setProductsOnPage = (category) => ({
    type: types.SET_PRODUCTS_ON_PAGE,
    category: category
});


export const setProductOnPage = (id) => ({
    type: types.SET_PRODUCT_ON_PAGE,
    id: id,
});