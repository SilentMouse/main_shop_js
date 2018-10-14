import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './index.css';

import registerServiceWorker from './registerServiceWorker';

import store from './store';
import routes from './routes';
// import { createStore, applyMiddleware } from 'redux'

import createHistory from 'history/createBrowserHistory'
import { Route, Router } from 'react-router'

// import { ConnectedRouter, routerReducer, routerMiddleware, push } from 'react-router-redux'

const history = createHistory()

ReactDOM.render(
    <Provider store={store}>
        <Router history={history}>
            {routes()}
        </Router>
    </Provider>,
    document.getElementById('root'),
);

registerServiceWorker();


// ReactDOM.render(<App />, document.getElementById('root'));