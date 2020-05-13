import axios from 'axios';

export const createItem = (item) => {
    return axios.post('/api/items/', item);
};

export const getItem = (itemId) => {
    return axios.get(`/api/items/${itemId}`);
};

export const getItems = () => {
    return axios.get('/api/items/');
};
