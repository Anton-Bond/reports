import { FETCH_USERS_START, FETCH_USERS_SUCCESS, FETCH_USERS_FAIL } from './types';
import userApi from '../../api/users';

const fetchUsers = () => dispatch => {
    dispatch({
        type: FETCH_USERS_START
    });

    return userApi.getUsers().then(
        response =>
            dispatch({
                type: FETCH_USERS_SUCCESS,
                payload: response.data
            }),
        error =>
            dispatch({
                type: FETCH_USERS_FAIL,
                payload: { error }
            })
    );
};

export default fetchUsers;
