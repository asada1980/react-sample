import { SET_COMPANY } from '../actions'

const company = (state = {}, action) => {
    switch(action.type) {
        case SET_COMPANY:
            return {...action.company}
        default: 
            return state
    }
}

export default company