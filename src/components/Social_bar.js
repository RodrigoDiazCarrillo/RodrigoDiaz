import { BsGithub, BsLinkedin } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import './Social_bar.css'

export function Social_bar() {
    return (
      <div className="icons">
        <a href="https://www.linkedin.com/in/rodrigo-diaz-carrillo/" target="_blank"><BsLinkedin/></a>
        <a href="https://github.com/RodrigoDiazCarrillo" target="_blank"><BsGithub/></a>
        <a href="mailto:dzcll90@gmail.com"><MdEmail/></a>
      </div>
    );
  }
  