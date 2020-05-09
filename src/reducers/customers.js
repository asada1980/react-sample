import {ADD_CUSTOMER_LIST, DELETE_CUSTOMER_LIST} from '../actions'

const customer = (state = [], action) => {

    switch(action.type) {
        case ADD_CUSTOMER_LIST:
            return [...state, {...action.customer}]
        case DELETE_CUSTOMER_LIST:
            return state.filter(customer => customer.id !== action.id)
        default: 
            return state
    }

}

export default customer