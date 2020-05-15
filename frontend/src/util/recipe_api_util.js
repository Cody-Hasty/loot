import axios from 'axios';

export const createRecipe = (recipe) => (
    axios.post({
        url: "/api/recipes",
        method: "POST",
        data: recipe,
    })
);
export const getRecipe = (recipeId) => (axios.get(`/api/recipes/${recipeId}`));
export const getRecipes = () => (axios.get('/api/recipes'));