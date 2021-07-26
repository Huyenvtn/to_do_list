import ToDoApp from './TodoApp';
import React, {useEffect} from 'react';
import api from './api';

const App = () => {
    var data = {
        "email": "m3uh.nurali43@gmail.com",
        "password": "12345678"
    };
    let token = localStorage.getItem('token');
    const getToken = () => {
        api.callApi('post', '/user/login', data).then(function (response) {
            localStorage.setItem('token',response.data.token);   
        })
    };
    useEffect(() => getToken(), []);

    if(!token) return null;
    return (
        <ToDoApp />
    );
};
export default App;