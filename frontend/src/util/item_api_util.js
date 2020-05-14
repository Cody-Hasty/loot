import axios from 'axios';
const qs = require('qs');

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
    return axios.get('/api/items/');
};
