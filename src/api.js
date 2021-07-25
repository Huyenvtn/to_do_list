import axios from 'axios';

export default {
    getLogin: () =>
    {
        var data = {
            "email": "m3uh.nurali43@gmail.com",
            "password": "12345678"
        };
        var config = {
            method: 'post',
            url: 'https://api-nodejs-todolist.herokuapp.com/user/login',
            headers: { 
                'Content-Type': 'application/json'
            },
            data : data
        };
        return axios(config)
    },
  
    postTask: (token, data) =>
    {
        var config = {
            method: 'post',
            url: 'https://api-nodejs-todolist.herokuapp.com/task',
            headers: { 
              'Authorization': 'Bearer ' + token, 
              'Content-Type': 'application/json'
            },
            data : data
        };
        return axios(config)
    },
    getAll: (token) => 
    {
        var token = 'Bearer '+ token;
        var config = {
            method: 'get',
            url: 'https://api-nodejs-todolist.herokuapp.com/task',
            headers: { 
              'Authorization': token, 
              'Content-Type': 'application/json'
            }
        };
        return axios(config)
    },
    getRegister: () =>
    {
        var data = {
            "name": "M3uhammad Nur Ali",
            "email": "m3uh.nurali43@gmail.com",
            "password": "12345678",
            "age": 20
        };
     
        var config = {
            method: 'post',
            url: 'https://api-nodejs-todolist.herokuapp.com/user/register',
            headers: { 
              'Content-Type': 'application/json'
            },
            data : data
        };
        
        axios(config)
        .then(function (response) {
            console.log(response.data);
        })
        .catch(function (error) {
            console.log(error);
        });
    }, 
    deleteTask: (token, id) =>
    {
        var config = {
            method: 'delete',
            url: 'https://api-nodejs-todolist.herokuapp.com/task/' + id,
            headers: { 
                'Authorization': 'Bearer ' +token, 
                'Content-Type': 'application/json'
            }
        };
        return axios(config);
    },
    updateTask: (token, id, data) => 
    {
        var config = {
            method: 'put',
            url: 'https://api-nodejs-todolist.herokuapp.com/task/'+ id,
            headers: { 
              'Authorization': 'Bearer '+ token, 
              'Content-Type': 'application/json'
            },
            data : data
        };
        return axios(config);
    },
    getById: (token, id) =>{
        var config = {
            method: 'get',
            url: 'https://api-nodejs-todolist.herokuapp.com/task/' + id,
            headers: { 
              'Authorization': 'Bearer ' + token, 
              'Content-Type': 'application/json'
            }
        };
        return axios(config);
    }
}