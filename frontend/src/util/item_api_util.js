import axios from 'axios';


export const createItem = (formData) => {
    return axios({
        url: "/api/items",
        method: "Post",
        data: formData,
        headers: { 'content-type': 'application/x-www-form-urlencoded' }
    });
};

export const getItem = (itemId) => {
    return axios.get(`/api/items/${itemId}`);
};

export const getItems = () => {
    return axios.get('/api/items');
};

export const updateItem = (item) =>
  axios.post({
    url: `/api/items/${item._id}`,
    method: "Patch",
    data: item,
  });

const updateItemII = (formData) => {
  return axios({
    url: `/api/items/${formData._id}`,
    method: "Patch",
    data: formData,
    headers: { "content-type": "application/x-www-form-urlencoded" },
  });
};

export const deleteItem = (itemId) => {
  axios.delete({
    url: `/api/items/${itemId}`,
    method: "Delete",
    data: itemId,
  });
};
