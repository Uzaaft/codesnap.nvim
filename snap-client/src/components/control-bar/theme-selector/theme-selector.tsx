import React, { useEffect, useState } from 'react';

var init = false;

const ThemeSelector = ({
  onChangeTheme,
  theme
}: {
  onChangeTheme: (theme: string) => void,
  theme: string
}) => {
  const [local_theme, setTheme] = useState(theme);

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
        value={local_theme}
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
        {themes.map((theme) => (
          <option key={theme} value={theme}>
            {theme}
          </option>
        ))}
      </select>
    </div>
  );

}



export default ThemeSelector;

