import React from 'react';
import { Route, Switch, Router } from 'react-router-dom';
import { ProtectedRoute } from './util/route_util';
import { createBrowserHistory } from 'history';
import SignUpFormContainer from './components/session/signup_form_container';
import LoginFormContainer from './components/session/login_form_container';
import WelcomePageContainer from './components/welcome/welcome_page_container';
import NavBarContainer from './components/nav/navbar_container';

const customHistory = createBrowserHistory();
function App() {
    return ( 
        <Router history={customHistory} >
            <div>
                <header>
                    <NavBarContainer />
                </header>
                    <Switch>
                        <ProtectedRoute exact path="/register" component={SignUpFormContainer} loggedIn/>
                        <ProtectedRoute exact path="/login" component={LoginFormContainer} loggedIn/>
                        {/* <Route exact path="/navbar" component={NavBarContainer} /> */}
                        <Route path="/" component={WelcomePageContainer} />
                    </Switch>
            </div>
        </Router>
    );
}

export default App;