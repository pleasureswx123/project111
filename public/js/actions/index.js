import { ADD_TODO, COMPLETE_TODO, SET_VISIBILITY_FILTER, VisibilityFilters,TOGGLENAVCLASS } from '../constants/actionTypes'


export function addTodo(text) {
    console.log(2)
    return { type: ADD_TODO, text };
}

export function completeTodo(index) {
    return { type: COMPLETE_TODO, index };
}

export function setVisibilityFilter(filter) {
    console.log(11)
    return { type: SET_VISIBILITY_FILTER, filter };
}

export function toggleNavStatus(url) {
    return { type: TOGGLENAVCLASS, url };
}