import axios from 'axios';

export default {
    callApi: (method, url, token, data) =>
    {
        var author = 'Bearer ' + token
        var config = {
            method: method,
            url: 'https://api-nodejs-todolist.herokuapp.com' + url,
            headers: { 
                'Authorization': author, 
                'Content-Type': 'application/json'
            },
            data : data
        };
        return axios(config)
    }
}