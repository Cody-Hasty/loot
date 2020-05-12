import {
    RECEIVE_USER_LOGOUT,
    RECEIVE_CURRENT_USER
} from '../actions/session_actions';


const initialState = {
    isAuthenticated: false,
    user: {}
}

const sessionReducer = (oldState = initialState, action) => {
    Object.freeze(oldState);
    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            console.log(action.currentUser)
            return {...oldState,
                isAuthenticated: !!action.currentUser,
                user: action.currentUser
            }
            // let nextState = Object.assign({}, oldState, { session: { currentUser: action.user.id } });
            // nextState.users[action.user.id] = action.user;
            // return nextState;
        case RECEIVE_USER_LOGOUT:
            return Object.assign({}, oldState, { session: { currentUser: null } });
        default:
            return oldState;
    }
}

export default sessionReducer;