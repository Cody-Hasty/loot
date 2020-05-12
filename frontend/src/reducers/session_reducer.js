import {
    RECEIVE_USER_SIGN_IN,
    RECEIVE_USER_LOGOUT
} from '../actions/session_actions';

const sessionReducer = (oldState = {}, action) => {
    Object.freeze(oldState);
    switch (action.type) {
        case RECEIVE_USER_SIGN_IN:
            let nextState = Object.assign({}, oldState, { currentUserId: action.user.id });
            nextState.users[action.user.id] = action.user;
            return nextState;
        case RECEIVE_USER_LOGOUT:
            return Object.assign({}, oldState, { currentUserId: null });
        default:
            return oldState;
    }
}

export default sessionReducer;