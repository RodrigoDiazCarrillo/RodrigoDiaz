import './CV.css'
import React, { useContext } from 'react';
import ThemeContext from '../context';
import {Timeline} from './Timeline';

export function CV() {
    const {theme} = useContext(ThemeContext);
    return (
        <div className={"cv"+theme.name}>
            <a className="title">Curricvlvm</a>
            <Timeline/>
        </div>
    );
  }
  