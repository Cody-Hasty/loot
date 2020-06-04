import { RECEIVE_ITEM, RECEIVE_ITEMS } from "../actions/item_actions";

const itemsReducer = (state = {}, action) => {
    Object.freeze(state);
    // let newState = Object.assign({}, state);
    switch (action.type) {
        case RECEIVE_ITEM:
            return Object.assign({}, state, action.item);
            // newState = action.item;
            // return newState;
        case RECEIVE_ITEMS:
            return Object.assign({}, state, action.items);
            // newState = action.items;
            // return newState;
        default:
            return state;
    }
}

export default itemsReducer;