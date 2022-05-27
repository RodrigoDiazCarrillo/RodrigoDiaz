import './Presentation.css'
import { BsFillMoonStarsFill} from "react-icons/bs";
import { FaSun} from "react-icons/fa";
import ThemeContext from '../context';
import React, { useContext } from 'react';

export function Presentation() {
  const {theme} = useContext(ThemeContext);
  // var text = <FaSun/>;
  // if (theme=="Light") {text=<BsFillMoonStarsFill/>;}
  // else {text=<FaSun/>}
  
  return (

        <div>
        <div className={"presentation"+theme.name}>
        <p><a><strong>Hello!</strong> My name is </a>
        <a><strong>Rodrigo</strong>,</a>
        <a>I'm junior Web Developer</a></p>
        
         </div>

    </div>
  );
}
