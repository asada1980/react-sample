import {COUNT_UP} from '../actions'

const numbering = (state = 0, action) => {

    switch(action.type) {
        case COUNT_UP:
            state = state + 1
            return state
        default: 
            return state
    }

}

export default numbering