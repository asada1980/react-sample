import React, {useContext} from 'react'

import useReactRouter from 'use-react-router';

import ProcessStep from '../common/ProcessStep'
import AppContext from '../../contexts/AppContext'

import {ADD_CUSTOMER_LIST, COUNT_UP} from '../../actions'

import {numberingCustomer} from '../../utilitys/numberingUtil'

const CustomerConfirm = () => {

    const { history } = useReactRouter();

    const { state, dispatch } = useContext(AppContext)

    const registCustomer = (e) => {
        e.preventDefault()
        dispatch({
            type: COUNT_UP
        })
        state.customer.id = numberingCustomer(state.nowCustomerMaxId)
        console.log(state.customer.id)
        dispatch({
            type: ADD_CUSTOMER_LIST,
            customer: state.customer
        })
        history.push({pathname: '/CustomerComplete'})
    }

    const returnToInput = (e) => {
        e.preventDefault()
        history.push({pathname: '/CustomerRegist'})
    }

    return (
        <div className="container-fruid">
            <ProcessStep step="2" />
            <div className="d-flex justify-content-center">
                <form className="col-8">
                    <div className="row">
                        <label className="col-sm-2 control-label" htmlFor="customerName">会社名：</label>
                        <div className="col-sm-10">{state.customer.customerName}</div>
                    </div>
                    <div className="row">
                        <label className="col-sm-2 control-label" htmlFor="customerPerson">担当者名：</label>
                        <div className="col-sm-10">{state.customer.customerPerson}</div>
                    </div>
                    <div className="row">
                        <label className="col-sm-2 control-label" htmlFor="zipCode1">郵便番号：</label>
                        <div className="col-sm-2">{state.customer.zipCode1}ー{state.customer.zipCode2}</div>
                    </div>
                    <div className="row">
                        <label className="col-sm-2 control-label" htmlFor="prefecture">住所：</label>
                        <div className="col-sm-10">{state.customer.prefecture}</div>
                    </div>
                    <div className="row">
                        <label className="col-sm-2 control-label" htmlFor="city">市区町村：</label>
                        <div className="col-sm-10">{state.customer.city}</div>
                    </div>
                    <div className="row">
                        <label className="col-sm-2 control-label" htmlFor="town">番地：</label>
                        <div className="col-sm-10">{state.customer.town}</div>
                    </div>
                    <div className="row">
                        <label className="col-sm-2 control-label" htmlFor="other">字・丁目：</label>
                        <div className="col-sm-10">{state.customer.other}</div>
                    </div>
                    <hr />
                    <div className="text-center mt-3">
                        <button type="submit" className="bbtn btn-primary rounded-pill btn-lg"
                            onClick={registCustomer}>登録する</button>
                    </div>
                    <div className="text-center mt-3">
                        <button type="submit" className="bbtn btn-warning rounded-pill btn-lg" 
                            onClick={returnToInput}>入力内容を修正する</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default CustomerConfirm