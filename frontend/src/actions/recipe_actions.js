import * as APIutil from "../util/recipe_api_util"
export const REMOVE_RECIPE_ERRORS = "REMOVE_RECIPE_ERRORS"
export const RECEIVE_RECIPE = "RECEIVE_RECIPE";
export const RECEIVE_RECIPES = "RECEIVE_RECIPES";
export const RECEIVE_RECIPE_ERRORS = "RECEIVE_RECIPE_ERRORS";

const receiveRecipe = (recipe) => ({
    type: RECEIVE_RECIPE,
    recipe
});

const receiveRecipes = (recipes) => ({
    type: RECEIVE_RECIPES,
    recipes
});

export const receiveErrors = errors => ({
    type: RECEIVE_RECIPE_ERRORS,
    errors
});

export const removeErrors = () => ({
    type: REMOVE_RECIPE_ERRORS
});

export const createRecipe = (recipe) => dispatch => (
    APIutil.createRecipe(recipe)
    .then((res) => dispatch(receiveRecipe(res.data)))
    .catch(err => dispatch(receiveErrors(err.response.data)))
);


export const getRecipe = (recipeId) => dispatch => (
    APIutil.getRecipe(recipeId)
    .then((res) => dispatch(receiveRecipe(res.data)))
    .catch(err => dispatch(receiveErrors(err.response.data)))
);


export const getRecipes = () => dispatch => (
    APIutil.getRecipes()
    .then((res) => dispatch(receiveRecipes(res.data)))
    .catch(err => dispatch(receiveErrors(err.response.data)))
);

// export const updateRecipe = (recipe) => dispatch => (
//     APIutil.updateRecipe(recipe)
//     .then((res) => {
//       const recipe = res.data;
//       dispatch(receiveRecipe(recipe));
//     })
//     .catch((err) => {
//       return dispatch(receiveErrors(err.response.data));
//     })
// )

// export const deleteRecipe = (recipeId) => dispatch => (
//     APIutil.deleteRecipe(recipeId)
//     .then((res) => {
//       const response = res.data;
//       dispatch(response);
//     })
//     .catch((err) => {
//       return dispatch(receiveErrors(err.response.data));
//     })
// )
  