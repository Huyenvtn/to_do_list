import axios from 'axios'
import { getCLS } from 'web-vitals';

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
  
    postTask: () =>
    {
      var data = {description: 'Task 1'};
      
      var config = {
        method: 'post',
        url: 'https://api-nodejs-todolist.herokuapp.com/task',
        headers: { 
          'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGZhOTEyNTE0N2I1OTAwMTdjNDNhOGMiLCJpYXQiOjE2MjcwMzk4NTl9.fMp41RivJ-QaDnMzaZfp6n7GqIowdIkoAYQXG7mngVg', 
          'Content-Type': 'application/json'
        },
        data : data
      };
      
      axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
      })
      .catch(function (error) {
        console.log(error);
      });
    } ,
  getAll: (token1) => 
    {
    //  var token1 = getLogin;
      var token = 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGZhOTEyNTE0N2I1OTAwMTdjNDNhOGMiLCJpYXQiOjE2MjcwMzk4NTl9.fMp41RivJ-QaDnMzaZfp6n7GqIowdIkoAYQXG7mngVg';
      var config = {
        method: 'get',
        url: 'https://api-nodejs-todolist.herokuapp.com/task',
        headers: { 
          'Authorization': token, 
          'Content-Type': 'application/json'
        }
      };
      
  return    axios(config)
      // .then(function (response) {
      //   console.log(JSON.stringify(response.data));
      // })
      // .catch(function (error) {
      //   console.log(error);
      // });
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
    }

 }