import axios from 'axios';

export default {
    callApi: (method, url, data) =>
    {
        var config = {
            method: method,
            url: 'https://api-nodejs-todolist.herokuapp.com' + url,
            headers: { 
                'Authorization': 'Bearer ' + localStorage.getItem('token'), 
                'Content-Type': 'application/json'
            },
            data : data
        };
        return axios(config)
    }
}