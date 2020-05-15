import { connect } from 'react-redux';
import RecipesIndex from './recipes_index';
import { getRecipes } from '../../util/recipe_api_util';

const mSTP = state => ({
    state: state
});

const mDTP = dispatch => ({
    getRecipes: () => dispatch(getRecipes())
});

export default connect(mSTP, mDTP)(RecipesIndex);