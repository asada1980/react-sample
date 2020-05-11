import React from 'react'

import { Link } from 'react-router-dom';

const Page = ({index, pageNo, paging}) => {

    const getClassName = () => {
        if (index === pageNo) {
            return "page-item active"
        } else {
            return "page-item "
        }
    }

    return (
        <li className={getClassName()}>
            <Link className="page-link" to="#" onClick={() => {paging(index)}}>{index}</Link>
        </li>
    )
}

export default Page