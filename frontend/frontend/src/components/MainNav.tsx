// src/components/MainNav.tsx
import React from 'react';
import logo from '../assets/logo.jpg'; // Importing the main logo image
import sidelogo from '../assets/sidelogo.png'; // Importing the side logo image

const MainNav: React.FC = () => {
  return (
    // Main container for the navigation, applying flexbox for layout
    <div className='flex justify-between items-center mt-10 mr-10 ml-10'>
      {/* Left section: contains the main logo and district text */}
      <div className='flex items-center text-3xl gap-5 font-bold'>
        {/* Main logo image */}
        <img src={logo} alt="logo" className='h-20 w-20' />
        {/* Text container */}
        <div>
          <p>DISTRICT INDORE</p>
          <p>Jhila Indore</p>
        </div>
      </div>
      {/* Right section: contains the side logo */}
      <div>
        <img src={sidelogo} alt="sidelogo" className='h-20 w-40' />
      </div>
    </div>
  );
};

export default MainNav;
