import React, { useContext } from 'react'

import { DELETE_CUSTOMER_LIST } from '../../actions'
import AppContext from '../../contexts/AppContext'

const Customer = ({ index, customer, reload }) => {
    const { dispatch } = useContext(AppContext)
    const id = customer.id
    const handleClickDeleteButton = () => {
        if (window.confirm(`顧客ID(id=${id})を削除してもよろしいですか？`)) { 
            dispatch({type: DELETE_CUSTOMER_LIST, id})
            reload()
        }
    }
    return (
        <tr>
            <td>{index + 1}</td>
            <td>{id}</td>
            <td>{customer.customerName}</td>
            <td>{customer.city + customer.town + customer.other}</td>
            <td><button type="button" className="btn btn-danger" onClick={handleClickDeleteButton}>削除</button></td>
        </tr>
    )
}

export default Customer