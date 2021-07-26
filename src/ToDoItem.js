const ToDoItem = (props) => {
  var todoClass = props.item.completed ? "done" : "undone";
  return (
    <li className="list-group-item">
      <div className={todoClass}>
        <span className="glyphicon glyphicon-ok icon" aria-hidden="true" onClick={()=>{ props.doneItem(props.item._id, props.item.completed, props.index) }}></span>
          {props.item.description} 
        <span className="glyphicon glyphicon-remove close" aria-hidden="true" onClick={()=>{ props.removeItem(props.item._id, props.index)}}></span>
      </div>
    </li>
  );
}
export default ToDoItem;
  