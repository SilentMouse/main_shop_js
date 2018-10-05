import { put, takeEvery,fork, call } from 'redux-saga/effects'

import * as types from "../constants/postsTypes";
import api from "../api";

function *posts (params) {

    var data = {}

    const result = yield call(api.posts.get, data)

    yield put({type: types.SET_POSTS, posts: result["posts"]})
}


function *post (params) {

    const result = yield call(api.posts.get_one, params)

    yield put({type: types.SET_POST, post: result["post"]})
}



function* watchSetPosts() {
    yield takeEvery(types.SET_POSTS_ON_PAGE, posts)
}


function* watchSetPost() {
    yield takeEvery(types.SET_POST_ON_PAGE, post)
}


export default function* postsSaga() {
    yield fork(watchSetPosts)
    yield fork(watchSetPost)
}
