import React from 'react';
import { Route, Switch } from 'react-router-dom';

import SignUpFormContainer from './components/session/signup_form_container';
import LoginFormContainer from './components/session/login_form_container';
import WelcomePage from './components/welcome/welcome_page_container';

function App() {
    return ( 
        <div>
            <Switch>
                <Route exact path="/signup" component={SignUpFormContainer} />
                <Route exact path="/login" component={LoginFormContainer} />
                <Route exact path="/" component={WelcomePage} />
            </Switch>
        </div>
    );
}

export default App;