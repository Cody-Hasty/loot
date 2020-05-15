import { connect } from 'react-redux';
import RecipesIndex from './recipes_index';
import { getRecipes, getRecipe } from '../../actions/recipe_actions';

const mSTP = state => ({
    recipes: state.entities.recipes
});

const mDTP = dispatch => ({
    getRecipes: () => dispatch(getRecipes()),
    getRecipe: recipeId => dispatch(getRecipe(recipeId))
});

export default connect(mSTP, mDTP)(RecipesIndex);