// import { delay } from 'redux-saga'
import { put, takeEvery,fork, call } from 'redux-saga/effects'

import * as types from "../constants/productsTypes";
import api from "../api";

function *products (params) {

    var data = {}

    const result = yield call(api.products.get, data)

    yield put({type: types.SET_PRODUCTS, products: result["products"]})
}


function *product (params) {

    // var data = {}

    const result = yield call(api.products.get_one, params)

    console.log("product", result)

    var data = {id: 2,title: "title1",price: "120"}

    // yield put({type: types.SET_PRODUCT, product: result["product"]})

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
