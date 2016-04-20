import Immutable from 'immutable'
import _ from 'lodash'
import { TOGGLENAVCLASS } from '../constants/actionTypes'
const mod5PicData = Immutable.List([{
    pic:{
        src:'/public/images/screen1.jpg',
        titel:'预览图'
    },
    mod5Nav:[
        {
            title:'图片替换',
            url:'/miui/mod/1'
        },
        {
            title:'图片染色',
            url:'/miui/mod/2'
        },
        {
            title:'文字颜色',
            url:'/miui/mod/3'
        }
    ]
}]);

export default function mod5Pic(state = mod5PicData, action) {
    switch (action.type) {
        default:
            return [...state]
    }
}

