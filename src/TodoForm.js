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
