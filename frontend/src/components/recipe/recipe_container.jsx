import { connect } from 'react-redux';
import RecipeForm from './recipe_form';

const mSTP = state => ({
    state: state
});

const mDTP = dispatch => ({
    createRecipe: recipe => dispatch(createRecipe)
});

export default connect(mSTP, mDTP)(RecipeForm);