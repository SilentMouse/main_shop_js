import requests from "../requests";
import { delay } from 'redux-saga'
import { takeEvery, fork } from 'redux-saga/effects'
import * as types from "../constants/authTypes";

function* auth(body) {

    console.log("auth_saga")
    console.log(body.state)


    const {url, options} = requests.auth.signInWithEmail(body.state);

    console.log("URL",url);
    console.log("OPTIONS",options);

    fetch(url,options).then((body) => {
        console.log(body);
    })
}

function* watchSignIn() {
    yield takeEvery(types.AUTH, auth)
}

export default function* authSaga() {
    yield fork(watchSignIn)
}

