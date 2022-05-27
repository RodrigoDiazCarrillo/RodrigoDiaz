import './Projects.css'
import web from '../img/web1.jpg';
import ThemeContext from '../context';
import React, { useContext } from 'react';

export function Projects() {

  const {theme} = useContext(ThemeContext);
    return (
      <div id={"projects"+theme.name}>
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
 