import React from 'react'
import ReactDOM from 'react-dom/client'
import './global.css'
import { BankApp } from './BankApp'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BankApp/>
  </React.StrictMode>,
)
