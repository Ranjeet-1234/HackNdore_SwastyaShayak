import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Importing various components and pages
import BirthCert from './Pages/Forms/BirthCert.tsx';
import DeathCert from './Pages/Forms/DeathCert.tsx';
// import Auth from './Auth/logic/Auth.js' // Commented out as it's not currently used
import Login from './Auth/components/Login.tsx';
import Register from './Auth/components/Registration.tsx';
import Permits from './Pages/Forms/Permits.tsx';
import SmallNav from './components/SmallNav.tsx';
import MainNav from './components/MainNav.tsx';
import NavLinks from './components/NavLinks.tsx';
import DownloadDocs from './Pages/Forms/DownloadDocs.tsx';
import './index.css';
// import Sample from './Auth/components/sample.tsx';
import Landing from './Pages/Landing/Landing.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    {/* Setting up the Router for handling different routes */}
    <Router>
      {/* Including navigation components */}
      <SmallNav />
      <MainNav />
      <NavLinks />
      
      {/* Defining routes for the application */}
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
