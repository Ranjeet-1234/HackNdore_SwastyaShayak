import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import BirthCert from './Pages/Forms/BirthCert.tsx'
import DeathCert from './Pages/Forms/DeathCert.tsx'
import Auth from './Auth/logic/Auth.js'
import Permits from './Pages/Forms/Permits.tsx'
import SmallNav from './components/SmallNav.tsx'
import MainNav from './components/MainNav.tsx'
import NavLinks from './components/NavLinks.tsx'
import './index.css'
import Landing from './Pages/Landing/Landing.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(

  <React.StrictMode>
    <Router>
    <SmallNav/>
    <MainNav/>
    <NavLinks/>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/birth" element={<BirthCert />} />
        <Route path="/death" element={<DeathCert />} />
        <Route path="/login" element={<Auth />} />
        <Route path="/permits" element={<Permits />} />
      </Routes>
    </Router>
  </React.StrictMode>,
)
