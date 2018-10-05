import { combineReducers } from 'redux';
import counter from './counter';
import products from './products';
import posts from './posts';

const rootReducer = combineReducers({
    counter,
    products,
    posts,
});

export default rootReducer;
