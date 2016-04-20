import Immutable from 'immutable'
import _ from 'lodash'
import { TOGGLENAVCLASS } from '../constants/actionTypes'
const initialItems = Immutable.List([
    {
        title: '锁屏',
        class: 'one active',
        url:'/',
        items: [
            {
                title: '锁屏模版(1/20)',
                url:'/'
            },
            {
                title: '锁屏模版(1/20)',
                url:'/mod2'
            }
        ]
    },
    {
        title: '桌面',
        class: 'two',
        url:'/mod3',
        items: [
            {
                title: '壁纸与图标(1/20)',
                url:'/mod3'
            },
            {
                title: '桌面适配(1/20)',
                url:'/mod4'
            }
        ]
    },
    {
        title: '全局',
        class: 'three',
        url:'/mod5',
        items: [
            {
                title: '界面一(1/20)',
                url:'/mod5'
            },
            {
                title: '界面二(1/20)',
                url:'/mod6'
            },
            {
                title: '界面三(1/20)',
                url:'/mod7'
            }
        ]
    },
    {
        title: '界面',
        class: 'four',
        url:'/mod8'
    },
    {
        title: '联系人',
        class: 'five',
        url:'/mod9'
    },
    {
        title: '短信',
        class: 'six',
        url:'/mod10'
    },
    {
        title: '设置',
        class: 'seven',
        url:'/mod11'
    }
]);

export default function navData(state = initialItems, action) {
    switch (action.type) {
        case TOGGLENAVCLASS:
            _([...state]).forEach(function(v,k) {
                var className = v.class;
                v.class = v.url === action.url ? className+' active' : className.replace(/\sactive/,'');
            }).value();
            return [...state];
        default:
            return [...state]
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
