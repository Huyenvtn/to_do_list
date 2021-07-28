import ToDoHeader from './ToDoHeader';
import ToDoForm from './TodoForm';
import ToDoList from './TodoList';
import api from './api';
import * as itemActions from './actions/itemActions';
import { useDispatch } from 'react-redux';
import React, { useEffect} from 'react';

  const ToDoApp = () => {
    const dispatch = useDispatch();
  const getData = () => {
    api.callApi('get', '/task', '').then(function (response) {
      dispatch(itemActions.allItem(response.data.data))  
    })
  };
  useEffect(() => getData(), []);

    return (
      <div id="main">
        <ToDoHeader/>
        <ToDoList/>
        <ToDoForm/>
      </div>
    );
  }
  export default ToDoApp;

