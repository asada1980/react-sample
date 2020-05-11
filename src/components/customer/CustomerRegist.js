import React, {useState, useContext} from 'react'

import useReactRouter from 'use-react-router';

import ProcessStep from '../common/ProcessStep'

import {SET_CUSTOMER} from '../../actions'
import AppContext from '../../contexts/AppContext'

const CustomerRegist = () => {

    const { history } = useReactRouter();
    const { state, dispatch } = useContext(AppContext)
    const [ customer, setCustomer ] = useState(state.customer)

    const moveCustuomerConfirm = e => {
        const form = document.getElementById('customerRegistForm')
        e.preventDefault();
        if (form.checkValidity() === false) {
            e.stopPropagation();
        } else {
            dispatch({type: SET_CUSTOMER, customer})
            history.push({pathname: '/CustomerConfirm'})    
        }
        form.classList.add('was-validated');
    }

    return (
        <div className="container-fruid">
            <ProcessStep step="1" />
            <div className="d-flex justify-content-center">
                <form className="col-8 needs-validation" id="customerRegistForm" noValidate >
                    <div className="form-row">
                        <div className="form-group col-md-6">
                            <label htmlFor="customerName">会社名</label>
                            <input type="text" className="form-control" id="customerName" placeholder="会社名を入力してください" 
                                onChange={e => setCustomer({...customer, customerName:e.target.value})} 
                                value={customer.customerName} required/>
                            <div class="invalid-feedback">
                                会社名は必須入力です
                            </div>
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
                        <div className="form-group col-sm-1">
                            <input type="tel" className="form-control" id="zipCode1" placeholder="上３桁" 
                                onChange={e => setCustomer({...customer, zipCode1:e.target.value})}
                                value={customer.zipCode1} required style={{width: "80px"}}/>
                        </div>
                        <div className="form-group ml-5">
                            <input type="tel" className="form-control" id="zipCode2" placeholder="下４桁" 
                                onChange={e => setCustomer({...customer, zipCode2:e.target.value})}
                                value={customer.zipCode2} required style={{width: "100px"}}/>
                        </div>
                    　</div>
                    <div className="form-row">
                        <div className="form-group col-md-6">
                            <label htmlFor="prefecture">住所</label>
                            <select className="form-control" 
                                onChange={e => setCustomer({...customer, prefecture:e.target.value})} required>
                                {prefectureList.map((prefecture, index) => {
                                    if (customer.prefecture === prefecture) {
                                        return <option selected>{prefecture}</option>
                                    } else {
                                        return <option>{prefecture}</option>
                                    }
                                })}
                            </select>
                        </div>
                    　</div>
                    <div className="form-row">
                        <div className="form-group col-md-6">
                            <label htmlFor="city">市区町村</label>
                            <input type="text" className="form-control" id="city" placeholder="市区町村を入力してください" 
                                onChange={e => setCustomer({...customer, city:e.target.value})}
                                value={customer.city} required/>
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-6">
                            <label htmlFor="town">番地</label>
                            <input type="text" className="form-control" id="town" placeholder="番地を入力してください" 
                                onChange={e => setCustomer({...customer, town:e.target.value})}
                                value={customer.town} required/>
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
                        <button type="submit" className="btn btn-primary rounded-pill btn-lg" onClick={moveCustuomerConfirm}>登録内容を確認する</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

const prefectureList = [
    "北海道",
    "青森県",
    "岩手県",
    "宮城県",
    "秋田県",
    "山形県",
    "福島県",
    "茨城県",
    "栃木県",
    "群馬県",
    "埼玉県",
    "千葉県",
    "東京都",
    "神奈川県",
    "新潟県",
    "富山県",
    "石川県",
    "福井県",
    "山梨県",
    "長野県",
    "岐阜県",
    "静岡県",
    "愛知県",
    "三重県",
    "滋賀県",
    "京都府",
    "大阪府",
    "兵庫県",
    "奈良県",
    "和歌山県",
    "鳥取県",
    "島根県",
    "岡山県",
    "広島県",
    "山口県",
    "徳島県",
    "香川県",
    "愛媛県",
    "高知県",
    "福岡県",
    "佐賀県",
    "長崎県",
    "熊本県",
    "大分県",
    "宮崎県",
    "鹿児島県",
    "沖縄県"
]
export default CustomerRegist