import React, { useContext } from 'react'

import useReactRouter from 'use-react-router';

import Customer from './Customer'
import AppContext from '../contexts/AppContext'

const Customers = () => {

    const { history } = useReactRouter();
    const { state } = useContext(AppContext)

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
                        <input type="text" className="form-control" id="customerName" placeholder="会社名を入力してください" />
                    </div>
                    <div className="form-group form-check w-50">
                        <input type="checkbox" className="form-check-input" id="contractNow" />
                        <label className="form-check-label" htmlFor="contractNow">現在契約中</label>
                    </div>
                  <div className="text-right">
                    <button type="submit" className="btn btn-primary">検索</button>
                  </div>
                </div>
            </div>
        </form>
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
                    {state.customers.map((customer, index) => (<Customer index={index} customer={customer}/>))}
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