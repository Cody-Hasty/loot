import { connect } from 'react-redux';
import { getRecipe } from '../../actions/recipe_actions';
import ShowRecipe from './recipe_show_component';

const mSTP = ({ entities }) => ({
    recipe: entities.recipes
});

const mDTP = dispatch => ({
    getRecipe: recipeId => dispatch(getRecipe(recipeId))
})

export default connect(mSTP, mDTP)(ShowRecipe);