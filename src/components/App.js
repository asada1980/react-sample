import React, {useReducer, useEffect} from 'react';
import { BrowserRouter as Router } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'

import Footer from './common/Footer'
import Header from './common/Header'
import NaviMenu from './common/NaviMenu'

import AppRoute from './AppRoute'

import AppContext from '../contexts/AppContext'
import reducer from '../reducers'
import AppInitialState from '../states/AppInitialState'

const APP_KEY = 'appKey'

const App = () => {

  const appState = localStorage.getItem(APP_KEY)
  let initialState = appState ? JSON.parse(appState) : AppInitialState
  initialState.navimenu = {
    home: '',
    customer: '',
    contract: '',
    company: ''
  }
  const [state, dispatch] = useReducer(reducer, initialState)

  useEffect(() => {
    localStorage.setItem(APP_KEY, JSON.stringify(state))
  }, [state])
  
  return (
    <AppContext.Provider value={{ state, dispatch }}>
      <Router>
        <Header />
        <div className="container-fluid">
          <div className="row">
            <div className="col-2 pl-3">
              <NaviMenu />
            </div>
            <AppRoute />
          </div>
        </div>
        <Footer />
      </Router>
    </AppContext.Provider>
  );
}

export default App;
