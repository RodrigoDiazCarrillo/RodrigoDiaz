import './Projects.css'
import web from '../img/web1.jpg';
//import { useTheme, Theme } from '../ThemeContext';
export function Projects() {

  //const { theme, setTheme } = useTheme();  
    return (
      <div id={"projects"}>
        <p className="title">Projects</p>

        <div className='pr'>
        <img src={web} ></img>
        <img src={web} ></img>
        <img src={web} ></img>
        <img src={web} ></img>
        </div>
      </div>
    );
  }
 