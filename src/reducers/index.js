import {combineReducers} from 'redux'

import customer from './customer'
import customers from './customers'
import numvering from './numbering'

export default combineReducers({
    customer,
    customers,
    nowCustomerMaxId: numvering
})
