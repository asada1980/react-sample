import {combineReducers} from 'redux'

import customer from './customer'
import customers from './customers'
import numvering from './numbering'
import pagenation from './pagenation'
import company from './company'
import navimenu from './navimenu'

export default combineReducers({
    customer,
    customers,
    filtered_customer: pagenation,
    nowCustomerMaxId: numvering,
    company,
    navimenu
})
