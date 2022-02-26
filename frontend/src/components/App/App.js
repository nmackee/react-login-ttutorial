import React, { useState } from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Dashboard from '../Daahboad/Dashboard';
import Login from '../Login/Login'
import Preferences from '../Preferences/Preferences';
import useToken from './useToken';

function App() {

  const {token, setToken} = useToken()

  if(!token) {
    return <Login setToken={setToken} />
  }
  
  return (
    <div className="wrapper">
      <h1>Application</h1>
      <BrowserRouter>
        <Routes>
          {/* <Route path="/dashboard">
            <Dashboard />
          </Route>
          <Route path="/preferences">
            <Preferences />
          </Route> */}
          <Route path='/dashboard' element={<Dashboard/>} />
          <Route path='/preferences' element={<Preferences/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;