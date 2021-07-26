import ToDoApp from './TodoApp';
import React, { useState, useEffect} from 'react';
import api from './api';

const App = () => {
    var data = {
        "email": "m3uh.nurali43@gmail.com",
        "password": "12345678"
    };
    if (!localStorage.getItem('token')){
        api.callApi('post', '/user/login', '', data).then(function (response) {
            localStorage.setItem('token', response.data.token);
        })
    }
    return (
        <ToDoApp />
    );
};
export default App;