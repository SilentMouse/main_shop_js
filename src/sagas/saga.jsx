import { put, takeEvery,fork } from 'redux-saga/effects'
import * as types from "../constants/actionTypes";
import productsSaga from "./products";
import postsSaga from "./posts";
import categoriesSaga from "./categories";

function* withoutReducer(){
    yield put({ type: types.DECREMENT })
}

function* watchWithoutReducer() {
    yield takeEvery(types.WITHOUT_REDUCER, withoutReducer)
}

export default function* rootSaga() {
    yield fork(watchWithoutReducer)
    yield fork(productsSaga)
    yield fork(categoriesSaga)
    yield fork(postsSaga)
}