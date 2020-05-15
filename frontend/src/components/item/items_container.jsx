import { connect } from 'react-redux';
import { getItems, getItem } from '../../actions/item_actions';
import Items from "./items_component";

const mSTP = ({ entities }) => ({
    items: entities.items
});

const mDTP = dispatch => ({
    getItems: () => dispatch(getItems()),
    getItem: itemId => dispatch(getItem(itemId))
});

export default connect(mSTP, mDTP)(Items);