// import { delay } from 'redux-saga'
import { put, takeEvery,fork, call } from 'redux-saga/effects'

import * as types from "../constants/productsTypes";
import api from "../api";

function *products (params) {

    const result = yield call(api.products.get, params)

    yield put({type: types.SET_PRODUCTS, products: result["products"]})
}


function *product (params) {

    const result = yield call(api.products.get_one, params)

    yield put({type: types.SET_PRODUCT, product: result["product"]})
}



function* watchSetProducts() {
    yield takeEvery(types.SET_PRODUCTS_ON_PAGE, products)
}


function* watchSetProduct() {
    yield takeEvery(types.SET_PRODUCT_ON_PAGE, product)
}


export default function* productsSaga() {
    yield fork(watchSetProducts)
    yield fork(watchSetProduct)
}
