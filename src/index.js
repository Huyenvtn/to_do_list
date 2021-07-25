import ReactDOM from 'react-dom';
import './index.css';
import ToDoApp from './TodoApp';
import api from './api';


const todoList = [
  {value: 'Task 1', done: false},
  {value: 'Task 2', done: true},
  {value: 'Task 3', done: true}
];



ReactDOM.render(<ToDoApp todoItems={todoList} />, document.getElementById('todo-app'));
