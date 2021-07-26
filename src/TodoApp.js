import ToDoHeader from './ToDoHeader';
import ToDoForm from './TodoForm';
import ToDoList from './TodoList';
import React, { useState, useEffect} from 'react';
import api from './api';

  const ToDoApp = () => {
    const [todoList, setTodoList] = useState([]);
  
    const getData = () => {
      api.callApi('get', '/task', '').then(function (response) {
        const newList = [];
        response.data.data.map((item)=> {
          if (item.completed == true){
            newList.push(item)
          } else {
            newList.unshift(item);
          }
        })
        setTodoList(newList);   
      })
    };
    useEffect(() => getData(), []); 
  
    let addItem = (todoItem) =>{
      let data = { description: todoItem.newValue}
      api.callApi('post', '/task', data).then(function (response) {
        const newList = [...todoList];
        newList.unshift(response.data.data)
        setTodoList(newList);
      })
    };

    let removeItem = (itemId, index) => {
      var url = '/task/' + itemId; 
      api.callApi('delete', url, '').then(function (response) {
        const newList = [...todoList];
        newList.splice(index, 1);
        setTodoList(newList);
      })
    }

    let doneItem = (itemId, completed, index) => {
      var url = '/task/' + itemId; 
      var data = { "completed": true };
      if(completed == true){
        data = { "completed": false };
      } 
      api.callApi('put', url, data).then(function (response) {
        const newList = [...todoList];
        var item = response.data.data;
        newList.splice(index, 1);
        item.completed ? newList.push(item) : newList.unshift(item);
        setTodoList(newList);
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

