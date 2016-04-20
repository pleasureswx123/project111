import { FILTER_ITEM } from '../constants/actionTypes'

const initialFilterItem = ''
export default function filter(state = initialFilterItem, action) {
    switch(action.type) {
        case FILTER_ITEM:
            return action.filterItem
        default:
            return state
    }
}


import Immutable from 'immutable'
import _ from 'lodash'
import { TOGGLENAVCLASS } from '../constants/actionTypes'


const mod2PicData = Immutable.List([{
    a:123   //初始数据 123
}]);

export default function mod2Pic(state = mod2PicData, action) {
    switch (action.type) {
        case UPDATA:
            state.a = '456';   //更改数据 成 456 ，这种方式是不对的，需要先 克隆 一个 state 的复制品，然后 再把 复制品 return 出去
            return state;
        default:
            return [...state]
    }
}



export default function mod2Pic(state = mod2PicData, action) {
    switch (action.type) {
        case UPDATA:
            const stateClone = Object.assign({}, state);
            stateClone.a
            return stateClone;
        default:
            return [...state]
    }
}

