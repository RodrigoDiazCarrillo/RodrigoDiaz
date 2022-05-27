
import React, { useContext } from 'react';
import ThemeContext from '../context';
import './Header.css'
import { BsFillMoonStarsFill} from "react-icons/bs";
import { FaSun} from "react-icons/fa";
import {Social_bar } from './Social_bar';

export function Component_header(){
  const { theme, handleChangeTheme } = useContext(ThemeContext);
  console.log("tema"+theme.name);
  var text = <FaSun/>;
  if (theme.name=="Light") {text=<BsFillMoonStarsFill/>;}
  else {text=<FaSun/>}
  return (
    <div className="header_main">
        <div id={"nav_bar"+theme.name}>
        <a>R</a>
          <a>o</a>
          <a>d</a>
          <a>r</a>
          <a>i</a>
          <a>g</a>
          <a>0</a>
          <a><br/> </a>
          <a>d</a>
          <a>i</a>
          <a>a</a>
          <a>z</a>

          <Social_bar />
        <button id={'themeBtn'+theme.name}
        onClick={handleChangeTheme}>
        {text}
        </button>
          </div>
        
    </div>
  );
}



