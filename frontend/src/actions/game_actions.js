import * as APIUtil from "../util/game_api_util";
import jwt_decode from 'jwt-decode';
export const REMOVE_GAME_ERRORS = "REMOVE_GAME_ERRORS"
export const RECEIVE_GAME = "RECEIVE_GAME";
export const RECEIVE_GAMES = "RECEIVE_GAMES";
export const RECEIVE_GAME_ERRORS = "RECEIVE_GAME_ERRORS";

const receiveGame = (game) => ({
    type: RECEIVE_GAME,
    game
});

const receiveGames = (games) => ({
    type: RECEIVE_GAME,
    games
});

export const receiveErrors = errors => ({
    type: RECEIVE_GAME_ERRORS,
    errors
});

export const removeErrors = () => ({
    type: REMOVE_GAME_ERRORS
});

export const createGame = (game) =>dispatch =>(
    APIUtil.createGame(game)
        .then((res) => {
            const game = res.data;
            dispatch(receiveGame(game));
        })
        .catch(err => {
            return dispatch(receiveErrors(err.response.data));
        })
);


export const getGame = (gameId) => dispatch =>(
    APIUtil.getGame(gameId)
        .then((res) => {
            const game = res.data;
            dispatch(receiveGame(game));
        })
        .catch(err => {
            return dispatch(receiveErrors(err.response.data));
        })
);


export const getGames = () => dispatch =>(
    APIUtil.getGame()
        .then((games) => dispatch(receiveGames(games)))
        .catch(err => dispatch(receiveErrors(err.response.data)))
);