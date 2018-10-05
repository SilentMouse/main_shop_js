import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './index.css';
import Products from './components/Products';
import Product from './components/ProductCard';
import Posts from './components/Posts';
import registerServiceWorker from './registerServiceWorker';

import store from './store';
// import { createStore, applyMiddleware } from 'redux'

import createHistory from 'history/createBrowserHistory'
import { Route, Router } from 'react-router'

// import { ConnectedRouter, routerReducer, routerMiddleware, push } from 'react-router-redux'

const history = createHistory()

ReactDOM.render(
    <Provider store={store}>
        <Router history={history}>
            <div>
                <Route exact path="/" component={Products}/>
                <Route exact path="/products/:product_id" component={Product}/>
                <Route exact path="/posts" component={Posts}/>
            </div>
        </Router>
    </Provider>,
    document.getElementById('root'),
);

registerServiceWorker();


// ReactDOM.render(<App />, document.getElementById('root'));