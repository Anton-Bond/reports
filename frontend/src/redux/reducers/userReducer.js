import {
    FETCH_USERS_START,
    FETCH_USERS_SUCCESS,
    FETCH_USERS_FAIL
} from '../actions/types';

const initialState = {
    loading: true,
    data: {}
};
const usersReducer = (state = initialState, action = {}) => {
    switch (action.type) {
        case FETCH_USERS_START:
            return {
                ...state,
                loading: true
            };
        case FETCH_USERS_SUCCESS:
            return {
                ...state,
                loading: false,
                data: action.payload
            };
        case FETCH_USERS_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload.error
            };
        default:
            return state;
    }
};

export default usersReducer;