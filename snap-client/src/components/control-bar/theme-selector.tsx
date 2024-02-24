import React, { useState } from 'react';

const ThemeSelector = () => {
    const [theme, setTheme] = useState('theme1');

    const handleThemeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setTheme(event.target.value);
        console.log('Theme Changed:', event.target.value);
        // Implement functionality to change theme here
    };

    return (
        <div className="theme-dropdown">
            <select 
              value={theme} 
              onChange={handleThemeChange}
              className="text-white py-2 px-4 rounded-md focus:outline-none mr-1"
              style={{ 
              backgroundColor: '#191e24', 
              margin: '0.25rem', 
              paddingLeft: '1rem', paddingRight: '1rem', 
              height: '3rem',
              fontFamily: 'inherit',
              fontSize: '0.875rem',
              fontWeight: '600',
              color: 'hsl(220 13% 69%)' }}
              >
                <option value="theme1">Theme 1</option>
                <option value="theme2">Theme 2</option>
            </select>
        </div>
    );
};

export default ThemeSelector;

