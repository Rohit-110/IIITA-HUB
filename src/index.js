import React from 'react';
import ReactDOM from 'react-dom/client';
import './css/index.css';
import App from './App';
import { useState } from 'react';
import { createContext } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

export const server="https://iiita-hub-backend-l7tm.onrender.com/api/v1";

export const Context = createContext({isAuthenticated : false});

const Appwrapper = () =>{
    const [isAuthenticated, setIsAuthenticated] =useState(false);
    const [user, setUser] =useState({});
    const [checkemail, setCheckemail] =useState({});
    return(
      <Context.Provider value={{
        isAuthenticated,
        setIsAuthenticated,
        user,
        setUser,
        checkemail,
        setCheckemail,

      }}>
        <App />
      </Context.Provider>
    );
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Appwrapper />
  </React.StrictMode>
);