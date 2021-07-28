export default function itemReducer(state = [], action){
switch(action.type) {
    case 'ADD_ITEM': 
        return [...state, Object.assign({}, action.item)] //1
        //state.push(action.item);
        //return state;
    default:
        return state;
}
}