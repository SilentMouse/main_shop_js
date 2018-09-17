import * as types from '../constants/actionTypes';

export const increment = () => ({
    type: types.INCREMENT
});

export const decrement = () => ({
    type: types.DECREMENT
});

export const without_reducer = () => ({
    type: types.WITHOUT_REDUCER
});

