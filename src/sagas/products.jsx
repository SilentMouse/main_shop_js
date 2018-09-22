// import { delay } from 'redux-saga'
import { put, takeEvery,fork } from 'redux-saga/effects'

import * as types from "../constants/productsTypes";
// import api from "../api";

function *products (params) {

     // api.products.get(params)

    var data = [
        {id: 1,title: "title1",price: "120"},
        {id: 2,title: "title2",price: "180"},
        {id: 3,title: "title3",price: "300"},
    ]

    yield put({type: types.SET_PRODUCTS, products: data})
}

function* watchSetProducts() {
    yield takeEvery(types.SET_PRODUCTS_ON_PAGE, products)
}


export default function* productsSaga() {
    yield fork(watchSetProducts)
}
