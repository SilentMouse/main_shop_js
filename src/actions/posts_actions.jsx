import * as types from '../constants/postsTypes';

export const setPostsOnPage = () => ({
    type: types.SET_POSTS_ON_PAGE
});


export const setPostOnPage = (id) => ({
    type: types.SET_POST_ON_PAGE,
    id: id,
});