import React from 'react'
import ReactDOM from 'react-dom/client'
import './global.css'
import { BankApp } from './BankApp'
import { NavBar } from './bank/components/navbar/Navbar'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <NavBar />
    <BankApp/>
  </React.StrictMode>,
)
