import ToDoHeader from './ToDoHeader';
import ToDoForm from './TodoForm';
import ToDoList from './TodoList';
import React, { useState, useEffect} from 'react';
import { connect } from 'react-redux';
import * as itemActions from './actions/itemActions';
import api from './api';

  const ToDoApp = (props) => {
   const getData = () => {
      api.callApi('get', '/task', '').then(function (response) {
        props.dispatch(itemActions.allItem(response.data.data))  
      })
    };
    useEffect(() => getData(), []); 
  
    let addItem = (todoItem) =>{
      let data = { description: todoItem.newValue}
      api.callApi('post', '/task', data).then(function (response) {
        props.dispatch(itemActions.addItem(response.data.data))
      })
    };

    let removeItem = (itemId, index) => {
      var url = '/task/' + itemId; 
      api.callApi('delete', url, '').then(function (response) {
        props.dispatch(itemActions.removeItem(index))
      })
    }

    let doneItem = (itemId, completed, index) => {
      var url = '/task/' + itemId; 
      var data = { "completed": true };
      if(completed == true){
        data = { "completed": false };
      } 
      api.callApi('put', url, data).then(function (response) {
        props.dispatch(itemActions.doneItem(response.data.data, index))
      }) 
    }

    return (
      <div id="main">
        <ToDoHeader/>
        <ToDoList items={/*todolist*/} removeItem={removeItem} doneItem={doneItem} />
        <ToDoForm addItem={addItem} />
      </div>
    );
  }
  function mapStateToProps(state){ //1
    return {
      items: state
    };
  }
  export default connect(mapStateToProps)(ToDoApp);

