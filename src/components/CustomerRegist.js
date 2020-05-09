import React, {useState, useContext} from 'react'

import { Dropdown } from 'react-bootstrap';
import useReactRouter from 'use-react-router';


import ProcessStep from './ProcessStep'

import {SET_CUSTOMER} from '../actions'
import AppContext from '../contexts/AppContext'

const CustomerRegist = () => {

    const { history } = useReactRouter();

    const { state, dispatch } = useContext(AppContext)

    const [ customer, setCustomer ] = useState(state.customer)

    const moveCustuomerConfirm = e => {
        e.preventDefault()
        dispatch({type: SET_CUSTOMER, customer})
        history.push({pathname: '/CustomerConfirm'})
    }

    return (
        <div className="container-fruid">
            <ProcessStep step="1" />
            <div className="d-flex justify-content-center">
                <form className="col-8">
                    <div className="form-row">
                        <div className="form-group col-md-6">
                            <label htmlFor="customerName">会社名</label>
                            <input type="text" className="form-control" id="customerName" placeholder="会社名を入力してください" 
                                onChange={e => setCustomer({...customer, customerName:e.target.value})} 
                                value={customer.customerName}/>
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-6">
                            <label htmlFor="customerPerson">担当者名</label>
                            <input type="text" className="form-control" id="customerPerson" placeholder="担当者名を入力してください" 
                                onChange={e => setCustomer({...customer, customerPerson:e.target.value})}
                                value={customer.customerPerson}/>
                        </div>
                    </div>
                    <div className="form-row">
                        <label htmlFor="zipCode1">郵便番号</label>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-1">
                            <input type="text" className="form-control" id="zipCode1" placeholder="上３桁" 
                                onChange={e => setCustomer({...customer, zipCode1:e.target.value})}
                                value={customer.zipCode1}/>
                        </div>
                        <div className="form-group col-2">
                            <input type="text" className="form-control" id="zipCode2" placeholder="下４桁" 
                                onChange={e => setCustomer({...customer, zipCode2:e.target.value})}
                                value={customer.zipCode2}/>
                        </div>
                    　</div>
                    <div className="form-row">
                        <div className="form-group col-md-6">
                            <label htmlFor="prefecture">住所</label>
                            <Dropdown>
                                <Dropdown.Toggle variant="secondary" id="prefecture">
                                    大阪府
                                </Dropdown.Toggle>
                                <Dropdown.Menu>
                                    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                    <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                    <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </div>
                    　</div>
                    <div className="form-row">
                        <div className="form-group col-md-6">
                            <label htmlFor="city">市区町村</label>
                            <input type="text" className="form-control" id="city" placeholder="市区町村を入力してください" 
                                onChange={e => setCustomer({...customer, city:e.target.value})}
                                value={customer.city}/>
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-6">
                            <label htmlFor="town">番地</label>
                            <input type="text" className="form-control" id="town" placeholder="番地を入力してください" 
                                onChange={e => setCustomer({...customer, town:e.target.value})}
                                value={customer.town}/>
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-6">
                            <label htmlFor="other">字・丁目</label>
                            <input type="text" className="form-control" id="other" placeholder="字・丁目を入力してください" 
                                onChange={e => setCustomer({...customer, other:e.target.value})}
                                value={customer.other}/>
                        </div>
                    </div>
                    <hr />
                    <div className="text-center mt-3">
                        <button type="submit" className="bbtn btn-primary rounded-pill btn-lg" onClick={moveCustuomerConfirm}>登録内容を確認する</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default CustomerRegist