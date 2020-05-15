import { connect } from 'react-redux';
import RecipeForm from './recipe_form';
import { createRecipe } from '../../util/recipe_api_util';

const mSTP = state => ({
    state: state
});

const mDTP = dispatch => ({
    createRecipe: recipe => dispatch(createRecipe(recipe))
});

export default connect(mSTP, mDTP)(RecipeForm);