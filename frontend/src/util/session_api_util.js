import axios from 'axios';

export const signup = (user) => {
    return axios.post('api/users/register', user);
}

export const login = (user) => {
    return axios.post('api/session', user);
}

export const logout = () => {
    return axios.delete('api/session');
}

export const setAuthToken = token => {
    if (token) {
        axios.defaults.headers.common["Authorization"] = token;
    } else {
        delete axios.defaults.headers.common["Authorization"];
    }
}