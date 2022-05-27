
import React, { useContext } from 'react';
import ThemeContext from '../context';
//import './Header.css'
//import { BsFillMoonStarsFill} from "react-icons/bs";
//import { FaSun} from "react-icons/fa";
//import { useTheme, Theme } from '../ThemeContext';

export function Component_header(){
  const { theme, handleChangeTheme } = useContext(ThemeContext);
  console.log("tema"+theme.name);
  return (
    <div className="header_main">
        <div id={"nav_bar"+theme.name}>
          
          </div>
        <button
        onClick={handleChangeTheme}
        style={{ background: theme.background, color: theme.foreground }}>
        Change Theme
        </button>
    </div>
  );
}



