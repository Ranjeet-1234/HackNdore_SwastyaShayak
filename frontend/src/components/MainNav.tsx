// src/components/MainNav.tsx
import React from 'react';
import logo from '../assets/logo.jpg';
import sidelogo from '../assets/sidelogo.png';

const MainNav: React.FC = () => {
  return (
    <div className='flex justify-between items-center mt-10 mr-10 ml-10'>
      <div className='flex items-center text-3xl gap-5 font-bold'>
        <img src={logo} alt="logo" className='h-20 w-20' />
        <div>
          <p>DISTRICT INDORE</p>
          <p>Jhila Indore</p>
        </div>
      </div>
      <div>
        <img src={sidelogo} alt="sidelogo" className='h-20 w-40' />
      </div>
    </div>
  );
};

export default MainNav;
