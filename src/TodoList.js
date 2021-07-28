import ToDoItem from './ToDoItem';
import { useSelector } from 'react-redux';
import React from 'react';

const ToDoList = () => {
  const items = useSelector((state)=>state.items)
  var tasks = items.map((item, index)=> {
    return (
      <ToDoItem key={index} index={index} item={item}/>
    );
  });
  return (
    <ul className="list-group">{tasks}</ul>
  );
}
export default ToDoList;
