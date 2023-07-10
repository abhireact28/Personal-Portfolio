import React from 'react';
import './services.css';
import {BiCheck} from 'react-icons/bi'
import {FaUserGraduate} from 'react-icons/fa'

const Services = () => {
  return (
    <>
    <section id="services">
      <h2><FaUserGraduate/><br /> --- EDUCATION ---</h2>

      <div className="container services__container">
       
        <article className="service">
          <div className="service__head">
            <h3>Bachelor of Technology (Electrical Engineering)</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className='service__list-icon'/>
              <p>DR RAMMANOHAR LOHIA AVADH UNIVERSITY AYODHYA UP</p>
            </li>
          </ul>
          
        </article>
        <article className="service">
          <div className="service__head">
            <h3>Central Board of Secondary Education (Intermediate)</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className='service__list-icon'/>
              <p>ST PAUL PUBLIC SCHOOL SALEMPUR DEORIA UP</p>
            </li>
          </ul>
          
        </article>
        <article className="service">
          <div className="service__head">
            <h3>Central Board of Secondary Education (High School)</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className='service__list-icon'/>
              <p>PD ACADEMY DEORIA UP</p>
            </li>
          </ul>
          
        </article>
      </div>
    </section>
      
    </>
  )
}

export default Services
