import React from 'react'
import ReactDOM from 'react-dom/client'
import { BankApp } from './BankApp'
import './global.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BankApp/>
  </React.StrictMode>,
)
