import React from 'react';
import './footer.css';
import { AiFillLinkedin} from 'react-icons/ai'
import { FiInstagram} from 'react-icons/fi'
import { BsGithub} from 'react-icons/bs'

const Footer = () => {
  return (
    <>
    <footer>
      <a href="#" className="footer__logo">Abhi</a>

      <ul className="permalinks">
        <li><a href="#"></a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://www.linkedin.com/in/abhinandan-kumar-gupta"><AiFillLinkedin/></a>
        <a href="https://www.instagram.com/abhinandangupta.28/"><FiInstagram/></a>
        <a href="https://github.com/abhireact28"><BsGithub/></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Abhinandan Developer. All rights reserved.</small>
      </div>
    </footer>
      
    </>
  )
}

export default Footer
