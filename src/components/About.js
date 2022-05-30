import './About.css'
import React, { useContext } from 'react';
import ThemeContext from '../context';

export function About() {
  const {theme} = useContext(ThemeContext);
  return (
 

        <div id={"about"+theme.name}>
        <p className='title'>About</p>
        <p>Hello! My name is <strong>Rodrigo</strong> and I enjoy creating websites.
          My interest in web development started in 2011 when 
          I tried to create a website for my business in Wordpress...</p>
          <p>
          Later in 2019, I started a <strong>University Degree in multimedia 
          and web development </strong>which sparked my interest 
          in web development again. </p>
          <p>
          In 2022 I have done 
          a full stack <strong>bootcamp at CodeSpace Academy</strong> and 
          I am ready to face new challenges.
          </p>



        </div>

  );
}

