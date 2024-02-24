import React, { useEffect, useState } from 'react';

const ThemeSelector = ({ onChangeTheme }: { onChangeTheme: (theme: string) => void }) => {
  const [theme, setTheme] = useState('theme1');


  const fetchThemes: () => Promise<string[]> = () => {
    const themes = fetch('/themes.json')
      .then(response => response.json())
      .then(data => {
        console.log('Themes:', data);
        return data;
      });
    return themes;
  }

  const handleThemeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const newTheme = event.target.value;
    setTheme(newTheme);
    onChangeTheme(newTheme);
  };

  const [themes, setThemes] = useState<string[]>([]);
  useEffect(() => {
    fetchThemes().then((themes) => {
      setThemes(themes);
    });
  }, []);

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
          color: 'hsl(220 13% 69%)'
        }}
      >
        {themes.map((theme: string) => (
          <option value={theme}>{theme}</option>
        ))}
      </select>
    </div>
  );

}



export default ThemeSelector;

