import React, { useState } from 'react';
import ThemeContext, { themes } from './context';
import {Component_header} from './components/Header';
import {CV} from "./components/CV"
import {Skills} from "./components/Skills";
import {Projects} from "./components/Projects";
import {Presentation} from "./components/Presentation";
import {About} from "./components/About";
import './App.css';
import Sketch from "react-p5";

export default function App() {
  const [theme, setTheme] = useState(themes.light);

  const handleChangeTheme = () => {
    setTheme(() => {
      return theme === themes.dark ? themes.light : themes.dark;
    });
  };

  return (
    <ThemeContext.Provider value={{ theme, handleChangeTheme }}>

        <div className="App">
        </div>
        <div id="Layout" style={{ background: theme.background, color: theme.foreground }}>
            <Component_header/>
            <Presentation/>   
            <About/>
            <Skills/>
            <CV/>
            <Projects/>
            <Appa/>


    </div>
  
    </ThemeContext.Provider>
  );
}



class Appa extends React.Component {
  
	setup = (p5, parentRef) => {


		p5.createCanvas(500,500).parent(parentRef);
    p5.background(0,180,180);
    p5.strokeWeight(1);
    p5.stroke(0);
    for(let i=0;i<5000;i++){

        p5.fill(0,p5.random(150,250),p5.random(150,250));

      p5.stroke(0);
      let x= p5.random(0,window.innerWidth);
      let y= p5.random(0,window.innerHeight);
      p5.ellipse(x,y,15,15);
    }
     
    

 }

 
 
render(){
		return (
			<div className="App">
				<Sketch setup={this.setup} draw={this.draw} />
			</div>
		);
	}
 
}
