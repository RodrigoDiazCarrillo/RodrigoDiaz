import './About.css'
import React, { useContext } from 'react';
import ThemeContext from '../context';

export function About() {
  const {theme} = useContext(ThemeContext);
  return (
 

        <div id={"about"+theme.name}>
        <p className='title'>About</p>
        <p>Hello! My name is Rodrigo and I enjoy creating websites.
          My interest in web development started in 2011 when 
          I tried to create a website for my business in Wordpress...</p>
          <p>
          Later in 2019, I started a Bachelor's degree in multimedia 
          and web development which sparked my interest 
          in web development again. </p>
          <p>
          In 2022 I have done 
          a full stack bootcamp at CodeSpace Academy and 
          I am ready to face new challenges.
          </p>



        </div>

  );
}

