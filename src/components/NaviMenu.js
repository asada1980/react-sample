import React, { useState } from 'react';

import { Link } from 'react-router-dom';

const NaviMenu = () => {

  const [homeActive, setHomeActive] = useState('list-group-item active')
  const [customerActive, setCustomerActive] = useState('list-group-item')
  const [contractActive, setContractActive] = useState('list-group-item')
  const [companyActive, setCompanyActive] = useState('list-group-item')

  const menuChange = (type) => {
    setHomeActive('list-group-item')
    setCustomerActive('list-group-item')
    setContractActive('list-group-item')
    setCompanyActive('list-group-item')
    switch(type) {
      case 1:
        setHomeActive('list-group-item active')
        break
      case 2:
        setCustomerActive('list-group-item active')
        break
      case 3:
        setContractActive('list-group-item active')
        break
      case 4:
        setCompanyActive('list-group-item active')
        break
      default:
        break;
    }
  }

  return (
      <div className="list-group">
        <Link to="/" className={homeActive} onClick={() => {menuChange(1)}}>ホーム</Link>
        <Link to="/Customers" className={customerActive} onClick={() => {menuChange(2)}}>顧客情報</Link>
        <Link to="/Contract" className={contractActive} onClick={() => {menuChange(3)}}>契約情報</Link>
        <Link to="/Company" className={companyActive} onClick={() => {menuChange(4)}}>自社情報</Link>
      </div>
  );
}

export default NaviMenu
