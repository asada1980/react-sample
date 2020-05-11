import {SELECT_HOME, SELECT_CUSTOMER, SELECT_CONTRACT, SELECT_COMPANY} from '../actions'

const navimenu = (state ={}, action) => {
    switch(action.type) {
        case SELECT_HOME:
            return {
                home: 'list-group-item active',
                customer: 'list-group-item',
                contract: 'list-group-item',
                company: 'list-group-item'
            }
        case SELECT_CUSTOMER:
            return {
                home: 'list-group-item',
                customer: 'list-group-item active',
                contract: 'list-group-item',
                company: 'list-group-item'
            }
        case SELECT_CONTRACT:
            return {
                home: 'list-group-item',
                customer: 'list-group-item',
                contract: 'list-group-item active',
                company: 'list-group-item'
            }
        case SELECT_COMPANY:
            return {
                home: 'list-group-item',
                customer: 'list-group-item',
                contract: 'list-group-item',
                company: 'list-group-item active'
            }
        default:
            return {
                home: 'list-group-item',
                customer: 'list-group-item',
                contract: 'list-group-item',
                company: 'list-group-item'
            }
    }
}

export default navimenu