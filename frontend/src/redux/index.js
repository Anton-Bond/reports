import { applyMiddleware, compose, createStore } from 'redux';
import { syncHistoryWithStore } from 'react-router-redux';
import ReduxPromise from 'redux-promise';
import thunk from 'redux-thunk';

import history from '../utils/history';
import reducers from './reducers';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
    reducers,
    composeEnhancers(applyMiddleware(ReduxPromise, thunk))
);

export const synthHistory = syncHistoryWithStore(history, store);
