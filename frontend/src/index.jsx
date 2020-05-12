import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Root from './root';
import axios from 'axios';
import configureStore from './store/store';
import { setAuthToken } from './util/session_api_util';
import jwt_decode from 'jwt-decode';

document.addEventListener('DOMContentLoaded', () => {
    const root = document.getElementById('root');
    let store
    if (localStorage.jwtToken) {
        setAuthToken(localStorage.jwtToken);
        const decode = jwt_decode(localStorage.jwtToken);
        const preloadedState = {
            session
        }
    } else {
        store = configureStore();
    }

    ReactDOM.render(<Root store={store} />, root);
})

window.axios = axios;