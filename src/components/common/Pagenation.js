import React, { useContext } from 'react'

import Page from './Page'
import { Link } from 'react-router-dom';
import AppContext from '../../contexts/AppContext'
import {PAGE_CHANGE} from '../../actions'

const Pagenation = ({maxRecords, targetData, pageChange, currentPage}) => {

    const { dispatch } = useContext(AppContext)

    const paging = (targetPage) => {
        pageChange(targetPage)
        dispatch({
            type: PAGE_CHANGE,
            datas: targetData,
            start: (targetPage - 1) * maxRecords,
            end: targetPage * maxRecords
        })
    }

    const dataSize = targetData.length
    const pageCount = dataSize % maxRecords === 0 ? dataSize / maxRecords : Math.floor(dataSize / maxRecords) + 1
    let list = []
    for (let i = 0; i < pageCount; i++) {
        list.push(<Page index={i + 1} pageNo={currentPage} paging={paging} key={i} />)
    }

    return (
        <nav className="mt-3" aria-label="...">
            <ul className="pagination">
                <li className={currentPage === 1 ? "page-item disabled" : "page-item"}>
                    <Link className="page-link" to="#" tabIndex="-1" onClick={() => {paging(currentPage - 1)}}>前へ</Link>
                </li>
                {list}
                <li className={currentPage === pageCount ? "page-item disabled" : "page-item"}>
                    <Link className="page-link" to="#" onClick={() => {paging(currentPage + 1)}}>次へ</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Pagenation