import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import UserCredContextProvider from './context/usercred'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <UserCredContextProvider>
        <App />
      </UserCredContextProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
