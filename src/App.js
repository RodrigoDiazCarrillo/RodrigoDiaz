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
      
           
    <div id={"main"} className={"app"+theme.name}>     
            <Component_header/>
            <Presentation/>   
            <About/>
            <Skills/>
            <CV/>
            <Projects/>
            <div className={"appa"}>
                <Appa/>
            </div>
    </div>
    </ThemeContext.Provider>
  );
}

let w=window.innerWidth;
let h= document.querySelector("html").scrollHeight;
let button=true;
//document.getElementById("main").className

class Appa extends React.Component {
  
	setup = (p5, main) => {
    let themeValue =document.getElementById("main").className;
		p5.createCanvas(window.innerWidth,window.innerHeight).parent(main);
    p5.background(0,180,180);
    p5.strokeWeight(1);
    p5.stroke(0);
    for(let i=0;i<5000;i++){
      if (themeValue==="appLight"){
        p5.fill(0,p5.random(150,250),p5.random(150,250));
      }
      if (themeValue==="appDark"){
        p5.fill(p5.random(0,250),0,0);
      }
      p5.stroke(0);
      let x= p5.random(0,window.innerWidth);
      let y= p5.random(0,window.innerHeight);
      p5.ellipse(x,y,15,15);
    }
     
    

 }
 draw =(p5,main)=>{
  
  let themeValue =document.getElementById("main").className;
  
  if (themeValue=="appLight"){
   p5.fill(0,p5.random(150,250),p5.random(150,250));
 }
 if (themeValue=="appDark"){
   p5.fill(p5.random(0,150),0,0);
 }
 if (themeValue=="appDark" && button==true){
   dark();
 }
 if (themeValue=="appLight" && button==false){
   light();
 }
  if (w!=window.innerWidth || h!= window.innerHeight){
   p5.createCanvas(window.innerWidth, window.innerHeight).parent(main);
   w=window.innerWidth;
   h= window.innerHeight;
   switch(themeValue){
     case "appDark": dark();
     break;
     case "appLight": light();
     break;
   }
  } 
 

 p5.stroke(0);
 let x= p5.random(0,window.innerWidth);
 let y= p5.random(0,window.innerHeight);
 p5.ellipse(x,y,15,15);

 function dark (){
   console.log("click");
   button=false;
   if(themeValue=="appDark"){
     p5.background(100,0,0);
   for(let i=0;i<5000;i++){
     p5.fill(p5.random(0,250),0,0);
     p5.stroke(0);
     let x= p5.random(0,window.innerWidth);
     let y= p5.random(0,window.innerHeight);
     p5.ellipse(x,y,15,15);
   }
 }
}
function light (){
 console.log("click");
 button=true;
 if(themeValue=="appLight"){
   p5.background(0,180,180);
 for(let i=0;i<5000;i++){
   p5.fill(0,p5.random(150,250),p5.random(150,250));
   p5.stroke(0);
   let x= p5.random(0,window.innerWidth);
   let y= p5.random(0,window.innerHeight);
   p5.ellipse(x,y,15,15);
 }
}
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
