import { connect } from "react-redux";
import { getItem, deleteItem } from "../../actions/item_actions";
import ShowItem from "./item_show_component";
import { getRecipes } from "../../actions/recipe_actions"

const mSTP = state => ({
  state: state
});

const mDTP = (dispatch) => ({
  getItem: (itemId) => dispatch(getItem(itemId)),
  deleteItem: (itemId) => dispatch(deleteItem(itemId)),
  getRecipes: () => dispatch(getRecipes())
});
 
export default connect(mSTP, mDTP)(ShowItem);
