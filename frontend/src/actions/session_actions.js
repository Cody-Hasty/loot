import * as APIutil from '../util/session_api_util';
import jwt_decode from 'jwt-decode';

export const RECEIVE_SESSION_ERRORS = "RECEIVE_SESSION_ERRORS";
export const RECEIVE_USER_LOGOUT = "RECEIVE_USER_LOGOUT";
export const RECEIVE_USER_SIGN_IN = "RECEIVE_USER_SIGN_IN";
export const REMOVE_ERRORS = "REMOVE_ERRORS";

export const receiveCurrentUser = (user) => ({
    type: RECEIVE_USER_SIGN_IN,
    user
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
        .then(user => dispatch(receiveUserSignIn(user)))
        .catch(err => dispatch(receiveErrors(err.response.data)))
}

export const login = user => dispatch => {
    return APIutil.login(user)
        .then(res => {
            const { token } = res.data;
            localStorage.setItem('jwtToken', token);
            APIutil.setAuthToken(token);
            const decoded = jwt_decode(token);
            dispatch(recieveUserSignIn(decoded));
        })
        .catch(err => dispatch(receiveErrors(err.response.data)))
};

export const logout = () => dispatch => {
    localStorage.removeIten('jwtToken');
    APIutil.setAuthToken(false)
    APIutil.logout()
        .then(() => (dispatch(logoutCurrentUser())))
};