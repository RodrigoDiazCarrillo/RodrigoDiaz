import './Projects.css'
import web from '../img/web1.jpg';
import pr1 from '../img/project_1.jpg';
import pr2 from '../img/portfolio.jpg';
import pr3 from '../img/fdiaz_template.jpg';
import pr4 from '../img/files-upload.jpg';
import ThemeContext from '../context';
import React, { useContext } from 'react';

export function Projects() {

  const {theme} = useContext(ThemeContext);
    return (
      <div id={"projects"+theme.name}>
        <p className="title">Projects</p>

        <div className='pr'>
        <div>
        <h2>React-Firebase upload files</h2>
        <p>(React - Firebase) August-22</p>
        <p className='const_advice'></p>
        <a href='https://github.com/RodrigoDiazCarrillo/react-firebase-upload-images.git' target="_blank">
          <img src={pr4} ></img></a>
        </div>
        <div>
        <h2>Opera template</h2>
        <p>(React) July-22</p>
        <p className='const_advice'>Under construction</p>
        <a href='https://rodrigodiazcarrillo.github.io/franciscodiaz/' target="_blank">
          <img src={pr3} ></img></a>
        </div>
        <div>
        <h2>Web app<br/> </h2>
        <p>(React) June-22</p>
        <a href='https://github.com/RodrigoDiazCarrillo/bootcamp-project-frontend.git' target="_blank">
          <img src={pr1} ></img></a>
        </div>
        <div>
        <h2>Restful API </h2>
        <p>(NodeJS) June-22</p>
        <a href='https://github.com/RodrigoDiazCarrillo/bootcamp-project-backend.git' target="_blank">
          <img src={web} ></img></a>
        </div>
        <div>
        <h2>My portfolio</h2>
        <p>(React) May-22</p>
        <a href='https://github.com/RodrigoDiazCarrillo/RodrigoDiaz.git' target="_blank">
          <img src={pr2} ></img></a>
        </div>
        </div>
        
      </div>
    );
  }
 