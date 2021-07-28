import React, { useRef} from 'react';
import api from './api';
import * as itemActions from './actions/itemActions';
import {useDispatch} from 'react-redux';

const ToDoForm = () => {
  const form = useRef();
  const itemName = useRef();
  const dispatch = useDispatch();

  let addItemApi = (todoItem) =>{
    let data = { description: todoItem.newValue}
    api.callApi('post', '/task', data).then(function (response) {
      dispatch(itemActions.addItem(response.data.data))
    })
  };

  let addItem = (event) => {
    event.preventDefault();
    var newValue = itemName.current.value;
    if(newValue){
      addItemApi({newValue});
    }
    form.current.reset();
  }
    
  return (
    <form ref={form} className="form-inline" onSubmit={addItem}> 
      <input ref={itemName} type="text" className="form-control" placeholder="add new task"></input>
      <button type="submit" className="btn btn-default">Add</button>
    </form>
  )
}

export default ToDoForm;
