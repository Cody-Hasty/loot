import * as APIUtil from "../util/game_api_util";
export const REMOVE_GAME_ERRORS = "REMOVE_GAME_ERRORS";
export const RECEIVE_GAME = "RECEIVE_GAME";
export const RECEIVE_GAMES = "RECEIVE_GAMES";
export const RECEIVE_GAME_ERRORS = "RECEIVE_GAME_ERRORS";

const receiveGame = (game) => ({
    type: RECEIVE_GAME,
    game
});

const receiveGames = (games) => ({
    type: RECEIVE_GAMES,
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


export const getGames = () => (dispatch) =>
    APIUtil.getGames()
        .then((res) => {
            const games = res.data;
            dispatch(receiveGames(games));
        })
        .catch((err) => {
            return dispatch(receiveErrors(err.response.data));
        });