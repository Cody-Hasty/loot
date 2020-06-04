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
    return axios.get('/api/games');
};

export const updateGame = (game) => (
    axios.post({
        url: `/api/games/${game._id}`,
        method: "Patch",
        data: game,
    })
);

const updateGameII = (formData) =>{
    return axios({
        url: `/api/games/${formData._id}`,
        method: "Patch",
        data: formData,
        headers: { "content-type": "application/x-www-form-urlencoded"}
    });
};

export const deleteGame = (gameId)=>{
    axios.delete({
        url: `/api/games/${gameId}`,
        method: "Delete",
        data: gameId
    });
};