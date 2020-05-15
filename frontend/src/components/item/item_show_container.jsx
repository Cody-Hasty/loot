import { connect } from "react-redux";
import { getItem } from "../../actions/item_actions";
import ShowItem from "./item_show_component";

const mSTP = ({ entities }) => ({
  item: entities.items,
});

const mDTP = (dispatch) => ({
  getItem: (itemId) => dispatch(getItem(itemId)),
});
 
export default connect(mSTP, mDTP)(ShowItem);
