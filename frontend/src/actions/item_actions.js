import * as APIUtil from "../util/item_api_util";
export const REMOVE_ITEM_ERRORS = "REMOVE_ITEM_ERRORS";
export const RECEIVE_ITEM = "RECEIVE_ITEM";
export const RECEIVE_ITEMS = "RECEIVE_ITEMS";
export const RECEIVE_ITEM_ERRORS = "RECEIVE_ITEM_ERRORS";

const receiveItem = (item) => ({
    type: RECEIVE_ITEM,
    item
});

const receiveItems = (items) => ({
    type: RECEIVE_ITEMS,
    items
});

export const receiveErrors = errors => ({
    type: RECEIVE_ITEM_ERRORS,
    errors
});

export const removeErrors = () => ({
    type: REMOVE_ITEM_ERRORS
});

export const createItem = (item) =>dispatch =>(
    APIUtil.createItem(item)
        .then((res) => {
            const item = res.data;
            dispatch(receiveItem(item));
        })
        .catch(err => {
            return dispatch(receiveErrors(err.response.data));
        })
);


export const getItem = (itemId) => dispatch =>(
    APIUtil.getItem(itemId)
        .then((res) => {
            const item = res.data;
            dispatch(receiveItem(item));
        })
        .catch(err => {
            return dispatch(receiveErrors(err.response.data));
        })
);


export const getItems = () => dispatch =>(
    APIUtil.getItems()
        .then((res) => {
            const items = res.data;
            dispatch(receiveItems(items));
        })
        .catch(err => {
            return dispatch(receiveErrors(err.response.data));
        })
);

export const updateItem = (item) => dispatch =>(

    APIUtil.updateItem(item)
      .then((res) => {
        const item = res.data;
        dispatch(receiveItem(item));
      })
      .catch((err) => {
        return dispatch(receiveErrors(err.response.data));
      })
);

export const deleteItem = (itemId) => dispatch =>(
    APIUtil.deleteItem(itemId)
      .then((res) => {
        const response = res.data;
        dispatch(response);
      })
      .catch((err) => {
        return dispatch(receiveErrors(err.response.data));
      })
);


