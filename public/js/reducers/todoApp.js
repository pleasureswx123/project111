import { combineReducers,createStore } from 'redux';
import { ADD_TODO, COMPLETE_TODO, SET_VISIBILITY_FILTER, VisibilityFilters } from '../constants/actionTypes'
const { SHOW_ALL } = VisibilityFilters;
export function visibilityFilter(state = SHOW_ALL, action) {
    console.log(22)
    switch (action.type) {
        case SET_VISIBILITY_FILTER:
            console.log(33)
            return action.filter;
        default:
            console.log(4)
            return state;
    }
}

export function todos(state = [], action) {
    console.log(44)
    switch (action.type) {
        case ADD_TODO:
            console.log(6)
            return [...state, {
                text: action.text,
                completed: false
            }];
        case COMPLETE_TODO:
            return [
                ...state.slice(0, action.index),
                Object.assign({}, state[action.index], {
                    completed: true
                }),
                ...state.slice(action.index + 1)
            ];
        default:
            console.log(55)
            return state;
    }
}



