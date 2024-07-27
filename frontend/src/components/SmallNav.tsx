import React from 'react';

const TopNav: React.FC = () => {
    const handleFontSizeChange = (action: 'increase' | 'decrease' | 'neutral'): void => {
        const root = document.documentElement;
        const currentFontSize = parseFloat(getComputedStyle(root).fontSize);

        if (action === 'increase' && currentFontSize < 20) {
            root.style.fontSize = `${currentFontSize * 1.1}px`;
        } else if (action === 'decrease' && currentFontSize > 16) {
            root.style.fontSize = `${currentFontSize * 0.9}px`;
        }
        else {
            root.style.fontSize = '16px';
        }
    };

    return (
        <div className="w-full h-9 border-b border-gray-200 bg-[#f7f7f7] text-sm flex items-center justify-evenly px-5">
            <div className="flex items-center gap-5">
            </div>
            <div className="flex items-center gap-3">
                <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 "></a>
                <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 "></a>
                <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 "></a>
                <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 "></a>
            </div>
            <div className="flex items-center gap-5">
                <a href="#main-content" className=" hover:underline">Skip to main content</a>
                <button onClick={() => handleFontSizeChange('decrease')} className="text-gray-600:underline">A-</button>
                <button onClick={() => handleFontSizeChange('neutral')} className="text-gray-600:underline">A</button>
                <button onClick={() => handleFontSizeChange('increase')} className="text-gray-600:underline">A+</button>
                <button className="hover:underline">Sign In</button>
                <button className="hover:underline">Register</button>
            </div>
        </div>
    );
};

export default TopNav;
