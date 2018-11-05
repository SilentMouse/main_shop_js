import * as types from '../constants/categoriesTypes';

const initialState = {
    categories: [],
    current_category: {},
}

export default function categories(state = initialState, action) {
    switch (action.type) {
        case types.SET_CATEGORIES:
            console.log(types.SET_CATEGORIES);
            return Object.assign({},state,{categories: action.categories})
        default:
            return state
    }
}