import { connect } from 'react-redux';
import { login, removeErrors } from '../../actions/session_actions';
import SessionForm from './session_form';

const mSTP = state => ({
    errors: state.errors.session,
    formType: 'login'
});

const mDTP = dispatch => ({
    action: (user) => dispatch(login(user)),
    removeErrors: () => dispatch(removeErrors())
})

export default connect(mSTP, mDTP)(SessionForm);

