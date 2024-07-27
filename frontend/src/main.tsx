import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import BirthCert from './Pages/Landing/BirthCert.tsx'
import DeathCert from './Pages/Landing/DeathCert.tsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(

  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/birth" element={<BirthCert />} />
        <Route path="/death" element={<DeathCert />} />
      </Routes>
    </Router>
  </React.StrictMode>,
)
