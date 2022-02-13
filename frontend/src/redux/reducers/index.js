import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import userReducer from './userReducer';
import { CLEAR_CURRENT_USER } from '../actions/types';

const combine = combineReducers({
    user: userReducer,
    routing: routerReducer,
});

const reducers = (state, action) =>
    combine(action.type === CLEAR_CURRENT_USER ? undefined : state, action);

export default reducers;
