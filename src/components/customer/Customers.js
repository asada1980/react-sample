import React, { useContext, useState, useEffect } from 'react'

import useReactRouter from 'use-react-router';

import Customer from './Customer'
import AppContext from '../../contexts/AppContext'

import Pagenation from '../common/Pagenation'
import { PAGE_CHANGE, SELECT_CUSTOMER } from '../../actions'

const Customers = () => {

    const MAX_CUSTOMER_RECORDS_COUNT = 10

    const { history } = useReactRouter();
    const { state , dispatch } = useContext(AppContext)
    const [ currentPage , setCurrentPage] = useState(1)
    const [ customerName , setCustomerName ] = useState('')
    const [ filtered_customer , setFilteredCustomer ] = useState(state.customers)

    useEffect(() => {
      dispatch({type:SELECT_CUSTOMER})
    }, [])

    const customerSearch = e => {
        e.preventDefault();
        setCurrentPage(1)
        search(1)
    }

    const search = (targetPage) => {
        const customers = state.customers.filter(customer => {
            return customer.customerName.indexOf(customerName) >= 0
        })
        setFilteredCustomer(customers)
        dispatch({
            type: PAGE_CHANGE,
            datas: customers,
            start: (targetPage - 1) * MAX_CUSTOMER_RECORDS_COUNT,
            end: targetPage * MAX_CUSTOMER_RECORDS_COUNT
        })
    }

    const pageChange = (targetPage) => {
        setCurrentPage(targetPage)
        search(targetPage)
    }

    const deleteCustomer = () => {
        setCurrentPage(1)
        search(1)
    }

    return (
      <>
        <form>
            <div className="card">
                <div className="card-header bg-success text-light">
                    検索条件
                </div>
                <div className="card-body bg-dark text-light">
                    <div className="form-group w-50">
                        <label htmlFor="customerName">会社名</label>
                        <input type="text" className="form-control" id="customerName" placeholder="会社名を入力してください"
                            onChange={(e) => {setCustomerName(e.target.value)}} />
                    </div>
                    <div className="form-group form-check w-50">
                        <input type="checkbox" className="form-check-input" id="contractNow" />
                        <label className="form-check-label" htmlFor="contractNow">現在契約中</label>
                    </div>
                  <div className="text-right">
                    <button type="submit" className="btn btn-primary" onClick={customerSearch}>検索</button>
                  </div>
                </div>
            </div>
        </form>
        <nav className="mt-3" aria-label="...">
            <Pagenation maxRecords={MAX_CUSTOMER_RECORDS_COUNT} currentPage={currentPage} targetData={filtered_customer} pageChange={pageChange}/>
        </nav>
        <div className="mt-3">
            <table className="table table-striped">
                <thead className="thead-dark">
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">会社コード</th>
                        <th scope="col">会社名</th>
                        <th scope="col">住所</th>
                        <th scope="col"></th>
                    </tr>
                </thead>
                <tbody className="table-info">
                    {state.filtered_customer.map((customer, index) => (<Customer index={index} customer={customer} reload={deleteCustomer} key={index}/>))}
                </tbody>
            </table>
        </div>
        <div className="text-right mt-1">
            <button type="submit" className="btn btn-primary" onClick={() => history.push('/CustomerRegist')}>新規登録</button>
        </div>
      </>
    )
}

export default Customers