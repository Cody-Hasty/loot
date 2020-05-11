import React from 'react';
import { Route, Switch } from 'react-router-dom';

import SignUpFormContainer from './components/session/signup_form_container';

function App() {
    return ( 
        <div>
            <Switch>
                <Route exact path="/" component={SignUpFormContainer} />
            </Switch>
        </div>
    );
}

export default App;