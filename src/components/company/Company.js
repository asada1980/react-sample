import React, { useState, useContext } from 'react'

import useReactRouter from 'use-react-router';

import AppContext from '../../contexts/AppContext'

import {prefectureList} from '../common/prefectureList'
import {SET_COMPANY} from '../../actions'

const SHOW_MODE = 'SHOW_MODE'
const REGIST_MODE = 'REGIST_MODE'
const UPDATE_MODE = 'UPDATE_MODE'

const Company = () => {

    const {history} = useReactRouter();
    const {state, dispatch} = useContext(AppContext)
    const [company, setCompany] = useState(state.company)

    const initialMode = company.name === '' ? REGIST_MODE : SHOW_MODE
    const [mode, setMode] = useState(initialMode)

    const registCompany = (e) => {
        e.preventDefault()
        const form = document.getElementById('customerRegistForm')
        if (form.checkValidity() === false) {
            e.stopPropagation();
        } else {
            dispatch({type: SET_COMPANY, company})
            history.push({pathname: '/'}) 
        }
        form.classList.add('was-validated');
    }

    return (
        <>
            <h4 className="text-primary">自社情報</h4>
            <div className="container-fruid">
                {mode === SHOW_MODE &&
                    <div className="text-center mt-3">
                        <button type="button" className="btn btn-warning" onClick={()=>{setMode(UPDATE_MODE)}}>編集モードへ</button>
                    </div>
                }
                {mode === UPDATE_MODE &&
                    <div className="text-center mt-3">
                        <button type="button" className="btn btn-secondary" onClick={()=>setMode(SHOW_MODE)}>参照モードへ</button>
                    </div>
                }
                <div className="d-flex justify-content-center">
                    <form className="col-8 needs-validation" id="customerRegistForm" noValidate>
                        <div className="form-row">
                            <div className="form-group col-md-6">
                                <label htmlFor="customerName">会社名</label>
                                <input type="text" className="form-control" id="customerName" placeholder="会社名を入力してください" 
                                    onChange={e => setCompany({...company, name:e.target.value})} 
                                    value={company.name} required
                                    disabled={mode === SHOW_MODE}/>
                                <div className="invalid-feedback">
                                    会社名は必須入力です
                                </div>
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="form-group col-md-6">
                                <label htmlFor="customerPerson">請求担当者</label>
                                <input type="text" className="form-control" id="customerPerson" placeholder="担当者名を入力してください" 
                                    onChange={e => setCompany({...company, person:e.target.value})}
                                    value={company.person}
                                    disabled={mode === SHOW_MODE}/>
                            </div>
                        </div>
                        <div className="form-row">
                            <label htmlFor="zipCode1">郵便番号</label>
                        </div>
                        <div className="form-row">
                            <div className="form-group col-sm-1">
                                <input type="tel" className="form-control" id="zipCode1" placeholder="上３桁" 
                                    onChange={e => setCompany({...company, zipCode1:e.target.value})}
                                    value={company.zipCode1} required style={{width: "80px"}}
                                    disabled={mode === SHOW_MODE}/>
                            </div>
                            <div className="form-group ml-5">
                                <input type="tel" className="form-control" id="zipCode2" placeholder="下４桁" 
                                    onChange={e => setCompany({...company, zipCode2:e.target.value})}
                                    value={company.zipCode2} required style={{width: "100px"}}
                                    disabled={mode === SHOW_MODE}/>
                            </div>
                        　</div>
                        <div className="form-row">
                            <div className="form-group col-md-6">
                                <label htmlFor="prefecture">住所</label>
                                <select className="form-control" 
                                    onChange={e => setCompany({...company, prefecture:e.target.value})} required
                                    disabled={mode === SHOW_MODE}>
                                    {prefectureList.map((prefecture, index) => {
                                        if (company.prefecture === prefecture) {
                                            return <option selected key={index} value={prefecture}>{prefecture}</option>
                                        } else {
                                            return <option key={index} value={prefecture}>{prefecture}</option>
                                        }
                                    })}
                                </select>
                            </div>
                        　</div>
                        <div className="form-row">
                            <div className="form-group col-md-6">
                                <label htmlFor="city">市区町村</label>
                                <input type="text" className="form-control" id="city" placeholder="市区町村を入力してください" 
                                    onChange={e => setCompany({...company, city:e.target.value})}
                                    value={company.city} required disabled={mode === SHOW_MODE}/>
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="form-group col-md-6">
                                <label htmlFor="town">番地</label>
                                <input type="text" className="form-control" id="town" placeholder="番地を入力してください" 
                                    onChange={e => setCompany({...company, town:e.target.value})}
                                    value={company.town} required disabled={mode === SHOW_MODE}/>
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="form-group col-md-6">
                                <label htmlFor="other">字・丁目</label>
                                <input type="text" className="form-control" id="other" placeholder="字・丁目を入力してください" 
                                    onChange={e => setCompany({...company, other:e.target.value})}
                                    value={company.other} disabled={mode === SHOW_MODE}/>
                            </div>
                        </div>
                        <hr />
                        <div className="text-center mt-3">
                            {mode === REGIST_MODE &&
                                <button type="submit" className="btn btn-primary rounded-pill btn-lg" onClick={registCompany}>入力内容で登録する</button>
                            }
                            {mode === UPDATE_MODE &&
                                <button type="submit" className="btn btn-primary rounded-pill btn-lg" onClick={registCompany}>入力内容で変更する</button>
                            }
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Company