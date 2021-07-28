export function addItem(item) {
    return { type: 'ADD_ITEM', item}
}
export function allItem(item) {
    return { type: 'ALL', item}
}
export function removeItem(item) {
    return { type: 'REMOVE_ITEM', item}
}
export function doneItem(item, index) {
    return { type: 'DONE_ITEM', item, index}
}