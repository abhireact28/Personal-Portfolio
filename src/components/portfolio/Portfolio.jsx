import React from 'react';
import './portfolio.css';
import IMG1 from '../../assets/ecommerce.jpg'
import IMG2 from '../../assets/crypto.jpg'
import IMG3 from '../../assets/c-app.jpg'



  const data =[
    {
        id: 1,
        image: IMG1,
        title: 'E-Commerce App / React Js Based Project',
        github: "https://github.com/abhireact28/E-commerce-App.git",
        demo: "https://e-commerce-app-three-dusky.vercel.app/",
    },
   
    {
        id: 2,
        image: IMG2,
        title: 'Crypto Currency Tracker App',
        github: "https://github.com/abhireact28/Crypto-App.git",
        demo: "https://crypto-app-zeta-green.vercel.app/",
    },

    {
      id: 3,
      image: IMG3,
      title: 'Chat App working on it ',
      github: "#",
      demo: "#",
  },
   

]

const Portfolio = () => {
  
  return (
    <>
    <section id="portfolio">
      <h2>--- PROJECTS ---</h2>

      <div className="container portfolio__container">
        {
          data.map(({id, image, title, github, demo}) => {
            return (
              <article key={id} className="portfolio__item" >
          <div className="portfolio__item-image">
            <img src={image} alt={title} />
          </div>
          <h3>{title}</h3>
         <div className="portfolio__item-cta">
         <a href={github} className='btn' target='_black'>Github</a>
          <a href={demo} className='btn btn-primary' target='_black'>Live Demo</a>
         </div>
        </article> 
            )
          })
        }
        
      </div>
    </section>
      
    </>
  )
}

export default Portfolio
