import React from 'react';
import api from './api';
import * as itemActions from './actions/itemActions';
import { useDispatch } from 'react-redux';

const ToDoItem = (props) => {
  const dispatch = useDispatch();

  let removeItem = (itemId, index) => {
    var url = '/task/' + itemId; 
    api.callApi('delete', url, '').then(function (response) {
      dispatch(itemActions.removeItem(index))
    })
  }

  let doneItem = (itemId, completed, index) => {
    var url = '/task/' + itemId; 
    var data = { "completed": true };
    if(completed == true){
      data = { "completed": false };
    } 
    api.callApi('put', url, data).then(function (response) {
      dispatch(itemActions.doneItem(response.data.data, index))
    }) 
  }
  var todoClass = props.item.completed ? "done" : "undone";
  return (
    <li className="list-group-item">
      <div className={todoClass}>
        <span className="glyphicon glyphicon-ok icon" aria-hidden="true" onClick={()=>{ doneItem(props.item._id, props.item.completed, props.index) }}></span>
          {props.item.description} 
        <span className="glyphicon glyphicon-remove close" aria-hidden="true" onClick={()=>{ removeItem(props.item._id, props.index)}}></span>
      </div>
    </li>
  );
}
export default ToDoItem;
  