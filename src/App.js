import ToDoApp from './TodoApp';
import React, { useState, useEffect} from 'react';
import api from './api';

const App = () => {
    const [token, setToken] = useState('');
    var data = {
        "email": "m3uh.nurali43@gmail.com",
        "password": "12345678"
    };
    const getToken = () => {
        api.callApi('post', '/user/login', '', data).then(function (response) {
            setToken(response.data.token);   
        })
    };
    useEffect(() => getToken(), []);

    if(!token) return null;
    return (
        <ToDoApp token={token}/>
    );
};
export default App;