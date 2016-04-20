import Immutable from 'immutable'
import _ from 'lodash'
import { TOGGLENAVCLASS } from '../constants/actionTypes'
const mod4Data = Immutable.List([{
    pic:{
        src:'/public/images/screen1.jpg',
        titel:'预览图'
    },
    mod4Con:{
        title:'桌面适配',
        con:[
            {
                text:'桌面时钟数字颜色',
                color:'#003348'
            },
            {
                text:'桌面图标文字颜色',
                color:'#003348'
            }
        ]
    }
}]);

export default function mod4Pic(state = mod4Data, action) {
    switch (action.type) {
        default:
            return [...state]
    }
}

