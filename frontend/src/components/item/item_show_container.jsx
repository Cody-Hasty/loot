import { connect } from "react-redux";
import { getItem, deleteItem } from "../../actions/item_actions";
import ShowItem from "./item_show_component";

const mSTP = ({ entities }) => ({
  item: entities.items,
});

const mDTP = (dispatch) => ({
  getItem: (itemId) => dispatch(getItem(itemId)),
  deleteItem: (itemId) => dispatch(deleteItem(itemId))
});
 
export default connect(mSTP, mDTP)(ShowItem);
