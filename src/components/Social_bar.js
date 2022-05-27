import { BsGithub, BsLinkedin } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import './Social_bar.css'

export function Social_bar() {
    return (
      <div className="icons">
        <a href=""><BsLinkedin/></a>
        <a href=""><BsGithub/></a>
        <a href=""><MdEmail/></a>
      </div>
    );
  }
  