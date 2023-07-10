import React from 'react';
import './about.css';
import ME   from '../../assets/Profile-img.jpg';
// import { FaAward } from 'react-icons/fa';
// import { FiUsers } from 'react-icons/fi';
// import { VscFolderLibrary } from 'react-icons/vsc';


const About = () => {
  return (
    <>
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Image" />
          </div>
        </div>
        
        <div className="about__content">
          <p>
            Hello, I am Abhinandan Kumar Gupta. I am Front-end Developer.
             As a developer I have in-depth knowledge of ReactJS development, 
             HTML5, CSS, BootStrap, Redux.
          </p>

          <div className="about__card">
            <h3>Here are few Highlights</h3>
              <ul>
                <li className='size'>React Developer.</li>
                <li className='size'>Interactive Front-end as per the design.</li>
                <li className='size'>Connects Api's.</li>
              </ul>
          </div>
          <br />
          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
      
    </>
  )
}

export default About
