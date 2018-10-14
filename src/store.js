import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'

// import createHistory from 'history/createBrowserHistory'

// import { routerMiddleware} from 'react-router-redux'

import reducers from "./reducers";
import rootSaga from './sagas/saga';

// const history = createHistory()

// const middleware = routerMiddleware(history)

const sagaMiddleware = createSagaMiddleware()
const store = createStore(
    reducers,
    applyMiddleware(sagaMiddleware),
    // applyMiddleware(middleware)
)

sagaMiddleware.run(rootSaga)

export default store;