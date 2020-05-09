import { SET_CUSTOMER, CLEAR_CUSTOMER_INFO } from '../actions'

const customer = (state = {}, action) => {

    switch(action.type) {
        case SET_CUSTOMER:
            return {...action.customer}
        case CLEAR_CUSTOMER_INFO:
            return {}
        default: 
            return state
    }

}

export default customer