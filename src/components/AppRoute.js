import React from 'react'

import { Route } from 'react-router-dom'

import Home from './Home'
import Customers from './customer/Customers'
import CustomerRegist from './customer/CustomerRegist'
import CustomerConfirm from './customer/CustomerConfirm'
import CustomerComplete from './customer/CustomerComplete'
import Contract from './Contract'
import Company from './company/Company'

const AppRoute = () => {
    return (
        <div className="col-10 pl-3">
            <div className="panel panel-info">
                <Route exact path='/' component={Home} />
                <Route path='/Customers' component={Customers} />
                <Route path='/Contract' component={Contract} />
                <Route path='/Company' component={Company} />
                <Route path='/CustomerRegist' component={CustomerRegist} />
                <Route path='/CustomerConfirm' component={CustomerConfirm} />
                <Route path='/CustomerComplete' component={CustomerComplete} />
            </div>
        </div>
    )
}

export default AppRoute