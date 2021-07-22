import ToDoHeader from './ToDoHeader';
import ToDoForm from './TodoForm';
import ToDoList from './TodoList';
import React, { useState} from 'react';

const ToDoApp = (props) => {
    const [todoList, setTodoList] = useState(props.todoItems);
  
    let addItem = (todoItem) =>{
      const newList = [...todoList];
      newList.unshift({
        index: todoList.length +1,
        value: todoItem.newValue,
        done: false
      })
      setTodoList(newList);
    }
    let removeItem = (itemIndex) => {
      const newList = [...todoList];
      newList.splice(itemIndex, 1);
      setTodoList(newList);
    }
    let doneItem = (itemIndex) => {
      const newList = [...todoList];
      var item = newList[itemIndex];
      newList.splice(itemIndex, 1);
      item.done = !item.done;
      item.done ? newList.push(item) : newList.unshift(item);
      setTodoList(newList);
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

  // class ToDoApp extends React.Component {
  //   constructor (props) {
  //     super(props);
  //     this.addItem = this.addItem.bind(this);
  //     this.removeItem=this.removeItem.bind(this);
  //     this.doneItem=this.doneItem.bind(this);
  //     this.state = {todoList: todoList};
  //   }
  //   addItem(todoItem){
  //     todoList.unshift({
  //       index: todoList.length +1,
  //       value: todoItem.newValue,
  //       done: false
  //     })
  //     this.setState({todoList:todoList});
  //   }
  //   removeItem(itemIndex) {
  //     todoList.splice(itemIndex, 1);
  //     this.setState({todoList: todoList});
  //   }
  //   doneItem(itemIndex) {
  //     var item = todoList[itemIndex];
  //     todoList.splice(itemIndex, 1);
  //     item.done = !item.done;
  //     item.done ? todoList.push(item) : todoList.unshift(item);
  //     this.setState({todoList:todoList});
  //   }
  //   render() {
  //     return (
  //       <div id="main">
  //     <ToDoHeader/>
  //    <ToDoList items={this.props.todoItems} removeItem={this.removeItem} doneItem={this.doneItem} />
  //    <ToDoForm addItem={this.addItem} />
  //     </div>
  //     );
  //   }
  // }