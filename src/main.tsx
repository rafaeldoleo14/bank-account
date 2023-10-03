import React from 'react'
import ReactDOM from 'react-dom/client'
import './global.css'
import { BankApp } from './BankApp'

import { NavBar } from './bank/components/navbar/Navbar'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <NavBar />
    <BankApp/>
import {BrowserRouter} from 'react-router-dom'
                      
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <BankApp/>
    </BrowserRouter>
  </React.StrictMode>,
)
