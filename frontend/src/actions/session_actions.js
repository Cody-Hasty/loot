import * as APIutil from '../util/session_api_util';
import jwt_decode from 'jwt-decode';

export const RECEIVE_SESSION_ERRORS = "RECEIVE_SESSION_ERRORS";
export const RECEIVE_USER_LOGOUT = "RECEIVE_USER_LOGOUT";
export const REMOVE_ERRORS = "REMOVE_ERRORS";
export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";



export const receiveCurrentUser = (currentUser) => ({
    type: RECEIVE_CURRENT_USER,
    currentUser
});

export const logoutCurrentUser = () => ({
    type: RECEIVE_USER_LOGOUT
});

export const receiveErrors = errors => ({
    type: RECEIVE_SESSION_ERRORS,
    errors
});

export const removeErrors = () => ({
    type: REMOVE_ERRORS,
});


export const signup = user => dispatch => {
    return APIutil.signup(user)
        .then((res) => {
            const { token } = res.data;
            // console.log('token:', token);
            localStorage.setItem('jwtToken', token);
            APIutil.setAuthToken(token);
            const decoded = jwt_decode(token);
            dispatch(receiveCurrentUser(decoded));
        })
        .catch(err => {
            // console.log(err.response)
            return dispatch(receiveErrors(err.response.data))
        })
}

export const login = user => dispatch => {
    return APIutil.login(user)
        .then(res => {
            const { token } = res.data;
            localStorage.setItem('jwtToken', token);
            APIutil.setAuthToken(token);
            const decoded = jwt_decode(token);
            console.log(res)
            dispatch(receiveCurrentUser(decoded));
        })
        .catch(err => dispatch(receiveErrors(err.response.data)))
};

export const logout = () => dispatch => {
    localStorage.removeItem('jwtToken');
    APIutil.setAuthToken(false);
    APIutil.logout()
        .then(() => (dispatch(logoutCurrentUser())));
};