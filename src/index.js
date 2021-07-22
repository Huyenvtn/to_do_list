import ReactDOM from 'react-dom';
import './index.css';
import ToDoApp from './TodoApp';

const todoList = [
  {index: 1, value: 'Task 1', done: false},
  {index: 2, value: 'Task 2', done: true},
  {index: 3, value: 'Task 3', done: true}
];

ReactDOM.render(<ToDoApp todoItems={todoList} />, document.getElementById('todo-app'));
