import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const todoList = [
  {index: 1, value: 'Task 1', done: false},
  {index: 2, value: 'Task 2', done: true},
  {index: 3, value: 'Task 3', done: true}
];

class ToDoForm extends React.Component {
  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
  }
  onSubmit(event) {
    event.preventDefault();
    var newValue = this.refs.itemName.value;
    if(newValue){
      this.props.addItem({newValue});
    }
    this.refs.form.reset();
  }
  render() {
    return (
      <form ref="form" className="form-inline" onSubmit={this.onSubmit}> 
        <input ref="itemName" type="text" className="form-control" placeholder="add new task"></input>
        <button type="submit" className="btn btn-default">Add</button>
      </form>
      )
  }
}

const ToDoItem = (props) => {
  var todoClass = props.item.done ? "done" : "undone";
  return (
    <li className="list-group-item">
      <div className={todoClass}>
          <span className="glyphicon glyphicon-ok icon" aria-hidden="true" onClick={()=>{ props.doneItem(parseInt(props.index)) }}></span>
          {props.item.value} 
          <span className="glyphicon glyphicon-remove close" aria-hidden="true" onClick={()=>{ props.removeItem(parseInt(props.index))}}></span>
      </div>
    </li>
  );
}

// class ToDoItem extends React.Component {
//   constructor(props) {
//     super(props);
//     this.onClickClose = this.onClickClose.bind(this);
//     this.onClickDone = this.onClickDone.bind(this);
//   }
//   onClickClose() {
//     var index = parseInt(this.props.index);
//     this.props.removeItem(index);
//   }
//   onClickDone() {
//     var index = parseInt(this.props.index);
//     this.props.doneItem(index);
//   }
//   render() {
//     var todoClass = this.props.item.done ? "done" : "undone";
//     return (
//       <li className="list-group-item">
//         <div className={todoClass}>
//           <span className="glyphicon glyphicon-ok icon" aria-hidden="true" onClick={this.onClickDone}></span>
//               {this.props.item.value}
//           <button className="close" onClick={this.onClickClose}><span className="glyphicon glyphicon-remove" aria-hidden="true"></span>
//           </button>
//         </div>
//       </li>
//       )
//   }
// }

const ToDoList = (props) => {
  var tasks = props.items.map((item, index)=> {
    return (
      <ToDoItem key={index} index={index} item={item} removeItem={props.removeItem} doneItem={props.doneItem}/>
    );
  });
  return (
    <ul className="list-group">{tasks}</ul>
  );
}

// class ToDoList extends React.Component {
//   render() {
//     var tasks = this.props.items.map((item, index)=> {
//       return (
//         <ToDoItem 
//         key={index} index={index} item={item} removeItem={this.props.removeItem} doneItem={this.props.doneItem }/>
//       );
//     });
//     return (     
//       <ul className="list-group">  
//         {tasks}
//       </ul>
//     );  
//   }
// }

function ToDoHeader () {
    return (<h1>To Do List</h1>);
}

// class ToDoHeader extends React.Component {
//   render() {
//     return (<h1>To do List</h1>);
//   }
// }

class ToDoApp extends React.Component {
  constructor (props) {
    super(props);
    this.addItem = this.addItem.bind(this);
    this.removeItem=this.removeItem.bind(this);
    this.doneItem=this.doneItem.bind(this);
    this.state = {todoList: todoList};
  }
  addItem(todoItem){
    todoList.unshift({
      index: todoList.length +1,
      value: todoItem.newValue,
      done: false
    })
    this.setState({todoList:todoList});
  }
  removeItem(itemIndex) {
    todoList.splice(itemIndex, 1);
    this.setState({todoList: todoList});
  }
  doneItem(itemIndex) {
    var item = todoList[itemIndex];
    todoList.splice(itemIndex, 1);
    item.done = !item.done;
    item.done ? todoList.push(item) : todoList.unshift(item);
    this.setState({todoList:todoList});
  }
  render() {
    return (
      <div id="main">
    <ToDoHeader/>
   <ToDoList items={this.props.todoItems} removeItem={this.removeItem} doneItem={this.doneItem} />
   <ToDoForm addItem={this.addItem} />
    </div>
    );
  }
}
ReactDOM.render(<ToDoApp todoItems={todoList} />, document.getElementById('todo-app'));
