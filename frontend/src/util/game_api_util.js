import axios from 'axios';

export const createGame = (formData) => {
    return axios({
        url: "/api/games",
        method: "Post",
        data: formData,
        headers: { 'content-type': 'application/x-www-form-urlencoded' }
    });
};

export const getGame = (gameId) => {
    return axios.get(`/api/games/${gameId}`);
};

export const getGames = () => {
    return axios.get('/api/games');
};