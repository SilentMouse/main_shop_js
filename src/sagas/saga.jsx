// import { delay } from 'redux-saga'
import { put, takeEvery,fork } from 'redux-saga/effects'
import * as types from "../constants/actionTypes";

function* withoutReducer(){
    yield put({ type: types.DECREMENT })
}

function* watchWithoutReducer() {
    yield takeEvery(types.WITHOUT_REDUCER, withoutReducer)
}

export default function* rootSaga() {
    yield fork(watchWithoutReducer)
}