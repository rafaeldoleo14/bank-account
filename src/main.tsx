import React from 'react'
import ReactDOM from 'react-dom/client'
import './global.css'
import { BankApp } from './BankApp'
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './bank/store/store';

                      
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <BankApp/>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
)
