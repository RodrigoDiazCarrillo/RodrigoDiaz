import './CV.css'
import React, { useContext } from 'react';
import ThemeContext from '../context';

export function CV() {
    const {theme} = useContext(ThemeContext);
    return (
        <div className={"cv"+theme.name}>
            <a className="title">Curricvlvm</a>
            <p>Lorem ipsum</p>
            <p>Lorem ipsum</p>
            <p>Lorem ipsum</p>
            <p>Lorem ipsum</p>
            <p>Lorem ipsum</p>
        
        </div>
    );
  }
  