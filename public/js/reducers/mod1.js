import Immutable from 'immutable'
import _ from 'lodash'
import { TOGGLENAVCLASS } from '../constants/actionTypes'
const screenData = Immutable.List([
    {
        src:'/public/images/screen/screen01.png',
        title:'五点解锁'
    },
    {
        src:'/public/images/screen/screen01.png',
        title:'五点解锁'
    },
    {
        src:'/public/images/screen/screen01.png',
        title:'五点解锁'
    },
    {
        src:'/public/images/screen/screen01.png',
        title:'五点解锁'
    },
    {
        src:'/public/images/screen/screen01.png',
        title:'五点解锁'
    }
]);

export default function data(state = screenData, action) {
    switch (action.type) {
        default:
            return state
    }
}

/*
 state.map(n=> /active/.test(n.class) && n.class.replace(/\sactive/,''));
 [
 ...state.slice(0, action.index),
 Object.assign({}, state[action.index], {
 class: state[action.index].class+' active'
 }),
 ...state.slice(action.index + 1)
 ]*/
