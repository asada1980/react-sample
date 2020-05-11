import React, {useContext, useEffect} from 'react'

import AppContext from '../contexts/AppContext'
import {SELECT_HOME} from '../actions'

const Home = () => {

  const {dispatch} = useContext(AppContext)
  useEffect(() => {
    dispatch({type:SELECT_HOME})
  })

    return (
      <>
        <h4>This is Home Page</h4>
        <div>This is Home Page</div>
      </>
    )
}

export default Home