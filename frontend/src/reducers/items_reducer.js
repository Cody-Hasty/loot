import { RECEIVE_ITEM, RECEIVE_ITEMS } from "../actions/item_actions";

const itemsReducer = (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_ITEM:
            return Object.assign({}, state, action.item);
        case RECEIVE_ITEMS:
            return Object.assign({}, state, action.items);
        default:
            return state;
    }
}

export default itemsReducer;