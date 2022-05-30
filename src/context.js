// context.js
import React from 'react';

export const themes = {
  light: {
    name: 'Light',
    foreground: '#000000',
    background: 'rgb(0, 100, 100)'
  },
  dark: {
    name: 'Dark',
    foreground: '#ffffff',
    background: 'rgb(140, 0, 0)'
  }
};

const ThemeContext = React.createContext(themes.light);

export default ThemeContext;