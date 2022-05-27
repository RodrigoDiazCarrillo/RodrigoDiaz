import React, { useState } from 'react';

import ThemeContext, { themes } from './context';
import {Component_header} from './components/Header';

export default function App() {
  const [theme, setTheme] = useState(themes.light);

  const handleChangeTheme = () => {
    // console.log(theme);
    setTheme(() => {
      return theme === themes.dark ? themes.light : themes.dark;
    });
  };

  return (
    <ThemeContext.Provider value={{ theme, handleChangeTheme }}>

        <div className="App">
          <h1>React Context</h1>
        </div>
        <div id="Layout" style={{ background: theme.background, color: theme.foreground }}>
      <header>
        <nav>
          <p>Inicio</p>
          <Component_header />
        </nav>
      </header>
  
      <footer>
        <p>Footer</p>
      </footer>
    </div>
  
    </ThemeContext.Provider>
  );
}