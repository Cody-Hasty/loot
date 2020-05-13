import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { AuthRoute } from './util/route_util';
import SignUpFormContainer from './components/session/signup_form_container';
import LoginFormContainer from './components/session/login_form_container';
import WelcomePageContainer from './components/welcome/welcome_page_container';
import NavBarContainer from './components/nav/navbar_container';

function App() {
    return ( 
        <div>
            <header>
                <NavBarContainer />
            </header>
            <Switch>
                <AuthRoute exact path="/register" component={SignUpFormContainer} />
                <AuthRoute exact path="/login" component={LoginFormContainer} />
                <Route exact path="/navbar" component={NavBarContainer} />
                <Route path="/" component={WelcomePageContainer} />
            </Switch>
        </div>
    );
}

export default App;