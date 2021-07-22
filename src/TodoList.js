
import ToDoItem from './ToDoItem';

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
  export default ToDoList;

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