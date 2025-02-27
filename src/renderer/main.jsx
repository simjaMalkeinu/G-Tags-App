import React from 'react'
import ReactDOM from 'react-dom/client'
import { HashRouter, Route, Routes } from 'react-router'
import { HeroUIProvider } from '@heroui/react'

import App from './App.jsx'
import Login from './login/Login.jsx'
import Dashboard from './dashboard/Dashboard.jsx'

import './styles/output.css'

ReactDOM.createRoot(document.getElementById('app')).render(
  <React.StrictMode>
    <HeroUIProvider>
      <HashRouter>
        <Routes>
          <Route path='/' element={<App />}>
            <Route index element={<Login />} />
            <Route path='dashboard' element={<Dashboard />} />
          </Route>
        </Routes>
      </HashRouter>
    </HeroUIProvider>
  </React.StrictMode>
)
