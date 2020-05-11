import React from 'react'

import useReactRouter from 'use-react-router';

import ProcessStep from '../common/ProcessStep'

const CustomerConfirm = () => {

    const { history } = useReactRouter();

    const returnToShow = (e) => {
        e.preventDefault()
        history.push({pathname: '/Customers'})
    }

    return (
        <div className="container-fruid">
            <ProcessStep step="3" />
            <div className="d-flex justify-content-center mt-5">
                <h3 className="text-success">顧客情報の登録が完了しました。</h3>
            </div>
            <div className="text-center mt-5">
                <button type="submit" className="bbtn btn-primary rounded-pill btn-lg"
                    onClick={returnToShow}>一覧画面へ戻る</button>
            </div>
        </div>
    )
}

export default CustomerConfirm