import Immutable from 'immutable'
import _ from 'lodash'
import { TOGGLENAVCLASS } from '../constants/actionTypes'
const mod2PicData = Immutable.List([{
    pic:{
        name:'七彩球',
        size:'1080*1920px',
        format:'png',
        src:'/public/images/screen.jpg',
        titel:'预览图'
    },
    mod2Nav:[
        {
            title:'壁纸',
            url:'/mod2/1'
        },
        {
            title:'解锁图标',
            url:'/mod2/2'
        },
        {
            title:'时间',
            url:'/mod2/3'
        },
        {
            title:'文字',
            url:'/mod2/4'
        }
    ]
}]);

export default function mod2Pic(state = mod2PicData, action) {
    switch (action.type) {
        default:
            return [...state]
    }
}

