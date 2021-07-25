import ToDoHeader from './ToDoHeader';
import ToDoForm from './TodoForm';
import ToDoList from './TodoList';
import React, { useState, useEffect} from 'react';
import api from './api';

  const ToDoApp = () => {
    const [todoList, setTodoList] = useState([]);

    const getData = () => {
      api.getLogin().then(function (response) {
        let token = response.data.token;
        api.getAll(token).then(function (response) {
          setTodoList(response.data.data);   
        })
      }) 
    };
    useEffect(() => getData(), []);
  
    let addItem = (todoItem) =>{
      let data = { description: todoItem.newValue}
      api.getLogin().then(function (response) {
        var token = response.data.token;
        api.postTask(token, data).then(function (response) {
          api.getAll(token).then(function (response) {
            setTodoList(response.data.data);  
          })
        })
      })
    };

    let removeItem = (itemId) => {
      api.getLogin().then(function (response) {
        var token = response.data.token;
        api.deleteTask(token, itemId).then(function (response) {
          api.getAll(token).then(function (response) {
            setTodoList(response.data.data); 
          })
        })
      })
    }

    let doneItem = (itemId) => {
      var data = { "completed": true };
      api.getLogin().then(function (response) {
        var token = response.data.token;
        api.getById(token, itemId, data).then(function (response) {
          if(response.data.data.completed == true){
            data = { "completed": false };
          } 
        }).then(function (response) {
          api.updateTask(token, itemId, data).then(function (response) {
            api.getAll(token).then(function (response) {
              setTodoList(response.data.data);  
            })
          })
        })
      }) 
    }

    return (
      <div id="main">
        <ToDoHeader/>
        <ToDoList items={todoList} removeItem={removeItem} doneItem={doneItem} />
        <ToDoForm addItem={addItem} />
      </div>
    );
  }
  export default ToDoApp;

