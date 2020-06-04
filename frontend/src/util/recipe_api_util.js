import axios from 'axios';

export const createRecipe = (recipe) => (
    axios.post({
        url: "/api/recipes/",
        method: "POST",
        data: recipe,
    })
);
export const getRecipe = (recipeId) => (axios.get(`/api/recipes/${recipeId}/`));
export const getRecipes = () => (axios.get('/api/recipes/'));

export const updateRecipe = (recipe) =>
  axios.post({
    url: `/api/recipes/${recipe.id}`,
    method: "Patch",
    data: recipe,
  });

const updateRecipeII = (formData) => {
  return axios({
    url: `/api/recipes/${formData.id}`,
    method: "Patch",
    data: formData,
    headers: { "content-type": "application/x-www-form-urlencoded" },
  });
};

export const deleteRecipe = (recipeId) => {
  axios.delete({
    url: `/api/recipes/${recipeId}`,
    method: "Delete",
    data: recipeId,
  });
};