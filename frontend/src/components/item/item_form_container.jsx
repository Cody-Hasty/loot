import { connect } from 'react-redux';
import { createItem } from '../../actions/item_actions';
import { getGames } from '../../actions/game_actions';
import ItemForm from "./item_form";
import {removeErrors} from "../../actions/item_actions";

const mSTP = state => ({
    state: state
});

const mDTP = dispatch => ({
    createItem: (item) => dispatch(createItem(item)),
    getGames: () => dispatch(getGames()),
    removeErrors: ()=>dispatch(removeErrors()) 
});

export default connect(mSTP, mDTP)(ItemForm);