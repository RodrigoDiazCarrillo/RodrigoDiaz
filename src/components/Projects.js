import './Projects.css'
import web from '../img/web1.jpg';
import pr1 from '../img/project_1.jpg';
import pr2 from '../img/portfolio.jpg';
import ThemeContext from '../context';
import React, { useContext } from 'react';

export function Projects() {

  const {theme} = useContext(ThemeContext);
    return (
      <div id={"projects"+theme.name}>
        <p className="title">Projects</p>

        <div className='pr'>
        <div>
        <p>My portfolio<br/> (React)</p>
        <a href='https://github.com/RodrigoDiazCarrillo/RodrigoDiaz.git' target="_blank">
          <img src={pr2} ></img></a>
        </div>
        <div>
        <p>Web app<br/> (React)</p>
        <a href='https://github.com/RodrigoDiazCarrillo/bootcamp-project-frontend.git' target="_blank">
          <img src={pr1} ></img></a>
        </div>
        <div>
        <p>Restful API (NodeJS)</p>
        <a href='https://github.com/RodrigoDiazCarrillo/bootcamp-project-backend.git' target="_blank">
          <img src={web} ></img></a>
        </div>
        </div>
      </div>
    );
  }
 