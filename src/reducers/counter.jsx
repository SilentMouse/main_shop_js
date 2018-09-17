import * as types from '../constants/actionTypes';

const initialState = {
    value: 1
}

export default function counter(state = initialState, action) {
    switch (action.type) {
        case types.INCREMENT:
            return {value: state.value + 1}
        case types.DECREMENT:
            return {value: state.value - 1}
        default:
            return state
    }
}