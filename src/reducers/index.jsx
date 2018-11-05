import { combineReducers } from 'redux';
import counter from './counter';
import products from './products';
import posts from './posts';
import categories from './categories';

const rootReducer = combineReducers({
    counter,
    products,
    posts,
    categories,
});

export default rootReducer;
