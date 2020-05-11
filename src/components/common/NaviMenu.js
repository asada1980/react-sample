import React, { useContext } from 'react';

import { Link } from 'react-router-dom';

import AppContext from '../../contexts/AppContext'

import {SELECT_HOME, SELECT_CUSTOMER, SELECT_CONTRACT, SELECT_COMPANY} from '../../actions'

const NaviMenu = () => {

  const {state, dispatch} = useContext(AppContext)



  return (
      <div className="list-group">
        <Link to="/" className={state.navimenu.home} onClick={() => {dispatch({type:SELECT_HOME})}}>ホーム</Link>
        <Link to="/Customers" className={state.navimenu.customer}>顧客情報</Link>
        <Link to="/Contract" className={state.navimenu.contract} >契約情報</Link>
        <Link to="/Company" className={state.navimenu.company}>自社情報</Link>
      </div>
  );
}

export default NaviMenu
