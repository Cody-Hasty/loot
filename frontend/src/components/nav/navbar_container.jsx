import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import NavBar from './navbar';

const mSTP = (state, ownProps) => {
    // console.log('container', state);
    return {
    currentUser: state.session.user,
}};

const mDTP = dispatch => ({
    logout: () => dispatch(logout())
});

export default connect(mSTP, mDTP)(NavBar);