// import { delay } from 'redux-saga'
import { put, takeEvery,fork, call } from 'redux-saga/effects'

import * as types from "../constants/categoriesTypes";
import api from "../api";

function *categories (params) {

    const result = yield call(api.categories.get, params)

    yield put({type: types.SET_CATEGORIES, categories: result["categories"]})
}

function* watchSetCategories() {
    yield takeEvery(types.SET_CATEGORIES_ON_PAGE, categories)
}


export default function* categoriesSaga() {
    yield fork(watchSetCategories)
}
