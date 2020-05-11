import {PAGE_CHANGE} from '../actions'

const pagenation = (state = [], action) => {
    switch(action.type) {
        case PAGE_CHANGE:
            return action.datas.slice(action.start, action.end)
        default: 
            return state
    }

}

export default pagenation