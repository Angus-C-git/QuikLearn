/**
 * API handler for login
 */
// import React from 'react';
import axios from "axios";

const BASE_URL = 'http://localhost:8000/api';
const ANCHOR = `${BASE_URL}/user`;

async function DoLogin(email, password) {
    const ENDPOINT = `${ANCHOR}/login`;
    const res = axios.post(ENDPOINT, {
        email: email,
        password: password
    }).then(response => {
        return response;
    }).catch(error => {
        console.error('Login failed', error.message);
        return error;
    });

    return res;
}


async function DoRegister(usrName, email, password) {
    const ENDPOINT = `${ANCHOR}/register`;
    const res = await axios.post(ENDPOINT, {
        usrName: usrName,
        email: email,
        password: password
    }).then(response => {
        return response;
    }).catch(error => {
        console.error(error);
        return error;
    })

    return res;
}

export default { DoLogin, DoRegister};

