import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import BirthCert from './Pages/Forms/BirthCert.tsx'
import DeathCert from './Pages/Forms/DeathCert.tsx'
// import Auth from './Auth/logic/Auth.js'
import Login from './Auth/components/Login.tsx'
import Register from './Auth/components/Registration.tsx'
import Permits from './Pages/Forms/Permits.tsx'
import SmallNav from './components/SmallNav.tsx'
import MainNav from './components/MainNav.tsx'
import NavLinks from './components/NavLinks.tsx'
import DownloadDocs from './Pages/Forms/DownloadDocs.tsx'
import './index.css'
import Sample from './Auth/components/sample.tsx'
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
        <Route path="/permits" element={<Permits />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/uploadocs" element={<DownloadDocs />} />
      </Routes>
    </Router>
  </React.StrictMode>,
)
