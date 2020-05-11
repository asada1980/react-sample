import {COUNT_UP} from '../actions'

const numbering = (state = 0, action) => {

    switch(action.type) {
        case COUNT_UP:
            return state + 1
        default: 
            return state
    }

}

export default numbering