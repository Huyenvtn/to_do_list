import React, { useRef} from 'react';

const ToDoForm = (props) => {
    const form = useRef();
    const itemName = useRef();
  
    let addItem = (event) => {
      event.preventDefault();
      var newValue = itemName.current.value;
      if(newValue){
        props.addItem({newValue});
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

  // class ToDoForm extends React.Component {
  //   constructor(props) {
  //     super(props);
  //     this.onSubmit = this.onSubmit.bind(this);
  //   }
  //   onSubmit(event) {
  //     event.preventDefault();
  //     var newValue = this.refs.itemName.value;
  //     if(newValue){
  //       this.props.addItem({newValue});
  //     }
  //     this.refs.form.reset();
  //   }
  //   render() {
  //     return (
  //       <form ref="form" className="form-inline" onSubmit={this.onSubmit}> 
  //         <input ref="itemName" type="text" className="form-control" placeholder="add new task"></input>
  //         <button type="submit" className="btn btn-default">Add</button>
  //       </form>
  //       )
  //   }
  // }