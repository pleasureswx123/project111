import Immutable from 'immutable'
import _ from 'lodash'
import { TOGGLENAVCLASS } from '../constants/actionTypes'
const mod3PicData = Immutable.List([{
    pic:{
        name:'七彩球',
        size:'1440*1280px',
        format:'jpg',
        src:'/public/images/screen1.jpg',
        titel:'预览图'
    },
    mod3Nav:[
        {
            title:'壁纸',
            url:'/miui/mod/1'
        },
        {
            title:'系统图标',
            url:'/miui/mod/2'
        },
        {
            title:'第三方图标',
            url:'/miui/mod/3'
        }
    ]
}]);

export default function mod3Pic(state = mod3PicData, action) {
    switch (action.type) {
        default:
            return [...state]
    }
}

