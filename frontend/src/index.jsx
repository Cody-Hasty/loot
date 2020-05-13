import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Root from './root';
// import axios from 'axios';
import configureStore from './store/store';
import { setAuthToken } from './util/session_api_util';
import jwt_decode from 'jwt-decode';
import { logout } from './util/session_api_util';

document.addEventListener('DOMContentLoaded', () => {
    const root = document.getElementById('root');
    let store;
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
})

// window.axios = axios;