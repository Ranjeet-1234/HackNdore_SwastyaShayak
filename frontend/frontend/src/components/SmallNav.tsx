import React from 'react';
import { Link } from 'react-router-dom';

const TopNav: React.FC = () => {
  // Function to handle font size changes
  const handleFontSizeChange = (action: 'increase' | 'decrease' | 'neutral'): void => {
    const root = document.documentElement; // Access the root element
    const currentFontSize = parseFloat(getComputedStyle(root).fontSize); // Get current font size

    // Increase font size, max limit 20px
    if (action === 'increase' && currentFontSize < 20) {
      root.style.fontSize = `${currentFontSize * 1.1}px`;
    } 
    // Decrease font size, min limit 16px
    else if (action === 'decrease' && currentFontSize > 16) {
      root.style.fontSize = `${currentFontSize * 0.9}px`;
    } 
    // Reset font size to default 16px
    else {
      root.style.fontSize = '16px';
    }
  };

  return (
    <div className="w-full h-9 border-b border-gray-200 bg-[#f7f7f7] text-sm flex items-center justify-between px-5">
      <div className="flex items-center gap-5">
        {/* Add any additional items for the left side of the nav bar here */}
      </div>
      
      {/* Social media links */}
      <div className="flex items-center gap-3">
        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 "></a>
        <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 "></a>
        <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 "></a>
        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 "></a>
      </div>

      {/* Navigation links and buttons */}
      <div className="flex items-center gap-5">
        <a href="#main-content" className="hover:underline">Skip to main content</a>
        <button onClick={() => handleFontSizeChange('decrease')} className="text-gray-600 hover:underline">A-</button>
        <button onClick={() => handleFontSizeChange('neutral')} className="text-gray-600 hover:underline">A</button>
        <button onClick={() => handleFontSizeChange('increase')} className="text-gray-600 hover:underline">A+</button>
        <Link to="/login"><button className="hover:underline">Sign In</button></Link>
        <Link to="/register"><button className="hover:underline">Register</button></Link>
      </div>
    </div>
  );
};

export default TopNav;
