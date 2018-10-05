import * as types from '../constants/postsTypes';

const initialState = {
    posts: [],
    current_post: {},
}

export default function posts(state = initialState, action) {
    switch (action.type) {
        case types.SET_POSTS:
            console.log(types.SET_POSTS);
            return Object.assign({},state,{posts: action.posts})
        case types.SET_POST:
            console.log(types.SET_POST);
            return Object.assign({},state,{current_post: action.post})
        default:
            return state
    }
}