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
  export default ToDoItem;
  
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
  
  