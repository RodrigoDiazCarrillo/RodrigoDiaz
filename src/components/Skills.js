import { FaCss3Alt,FaReact,FaNodeJs,FaBootstrap,FaHtml5,FaSass,FaGithub} from "react-icons/fa";
import { SiTypescript, SiJavascript, SiProcessingfoundation,SiSymfony
,SiMongodb,SiPhp} from "react-icons/si";
import './Skills.css'
import React, { useState } from 'react';
//import { useTheme, Theme } from '../ThemeContext';
export function Skills() {
  //const { theme, setTheme } = useTheme();
    return (
      <div className={"skills"}>
        

      <p className="title">Technologies</p>
      
        <div className="icons">
             <div>
                <i><FaCss3Alt/></i>
                <i><FaReact/></i>
                <i><FaNodeJs/></i>
                <i><FaBootstrap/></i>
                <i><SiProcessingfoundation/></i>
                <i><SiMongodb/></i>
                <i><FaGithub/></i>
            </div>
            <div>
                <i><FaHtml5/></i>
                <i><SiJavascript/></i>
                <i><SiTypescript/></i>
                <i><FaSass/></i>
                <i><SiSymfony/></i>
                <i><SiPhp/></i>
            </div>

        </div>
      </div>
    );
  }
 
  