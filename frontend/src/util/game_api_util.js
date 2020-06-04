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

const log = x => (console.log(x), x)

export const getGames = () => {
    return log(axios.get('/api/games'));
};