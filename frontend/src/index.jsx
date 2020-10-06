import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
import Root from './root';
// import axios from 'axios';
import configureStore from './store/store';
import { setAuthToken } from './util/session_api_util';
import jwt_decode from 'jwt-decode';
import { logout } from './actions/session_actions';
import ReactGA from 'react-ga';

function initializeReactGA() {
    ReactGA.initialize('UA-179849783-1');
    let page = window.location.pathname;
    console.log(window.location.pathname);
    ReactGA.pageview(`/${page}`);
}

// window.onpopstate = function () {
//     console.log("hi");
//     initializeReactGA();

// };

let pushState = window.history.pushState;
window.history.pushState = function () {
    initializeReactGA();
    pushState.apply(window.history, arguments);
};




document.addEventListener('DOMContentLoaded', () => {
    const root = document.getElementById('root');
    let store;
    // console.log(window);
    if (localStorage.jwtToken) {
        setAuthToken(localStorage.jwtToken);
        const decoded = jwt_decode(localStorage.jwtToken);
        // console.log(decoded);
        const preloadedState = {
            session: {
                isAuthenticated: true,
                user: decoded
            }
        }
        store = configureStore(preloadedState);
        const currentTime = Date.now() / 1000;
        if (decoded.exp < currentTime) {
            store.dispatch(logout());
        }
    } else {
        store = configureStore();
    }

    ReactDOM.render(<Root store={store}/>, root);
});

// window.axios = axios;