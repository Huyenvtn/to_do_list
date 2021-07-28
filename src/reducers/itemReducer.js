export default function itemReducer(state = [], action){
  switch(action.type) {
    case 'ADD_ITEM': 
      const addState = [...state];
      addState.unshift(action.item);
      return addState;
    case 'REMOVE_ITEM': 
      const removeState = [...state];
      removeState.splice(action.item, 1);
      return removeState;
    case 'DONE_ITEM':
      const doneState = [...state];
      doneState.splice(action.index, 1);
      action.item.completed ? doneState.push(action.item) : doneState.unshift(action.item);
      return doneState;
    case 'ALL':
      const allState = [...state];
      action.item.forEach(element => {
        if (element.completed == true){
          allState.push(element)
        } else {
          allState.unshift(element);
        }
      });
      return allState;
    default:
      return state;
  }
}