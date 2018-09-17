import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './index.css';
import App from './App';
import App2 from './App2';
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
                <Route exact path="/" component={App}/>
                <Route exact path="/app2" component={App2}/>
            </div>
        </Router>
    </Provider>,
    document.getElementById('root'),
);

registerServiceWorker();


// ReactDOM.render(<App />, document.getElementById('root'));