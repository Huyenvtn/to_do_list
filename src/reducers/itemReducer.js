export default function itemReducer(state = [], action){
switch(action.type) {
    case 'ADD_ITEM': 
        state.unshift(action.item);
        return state;
    case 'REMOVE_ITEM': 
        state.splice(action.item, 1);
        return state;
    case 'DONE_ITEM':
        state.splice(action.index, 1);
        action.item.completed ? state.push(action.item) : state.unshift(action.item);
        return state;
    case 'ALL':
        action.item.map((item)=> {
          if (item.completed == true){
            state.push(item)
          } else {
            state.unshift(item);
          }
        })
        return state;
    default:
        return state;
}
}