import './Presentation.css'
import { BsFillMoonStarsFill} from "react-icons/bs";
import { FaSun} from "react-icons/fa";
//import { useTheme, Theme } from '../ThemeContext';

export function Presentation() {
  //const { theme, setTheme } = useTheme();
  // var text = <FaSun/>;
  // if (theme=="Light") {text=<BsFillMoonStarsFill/>;}
  // else {text=<FaSun/>}
  
  return (
        //console.log(theme),
        <div>
        <div className={"presentation"}>
        <p><a><strong>Hello!</strong> My name is </a>
        <a><strong>Rodrigo</strong>,</a>
        <a>I'm junior Web Developer</a></p>
        
         </div>

    </div>
  );
}
