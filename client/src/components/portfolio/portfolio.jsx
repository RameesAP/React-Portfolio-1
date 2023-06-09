import React from 'react'
import './portfolio.css'

import IMG1 from '../../assets/Portfolio1.1.png'
import IMG2 from '../../assets/portfolio1.png'
import IMG3 from '../../assets/portfolio2.png'
import IMG4 from '../../assets/portfolio3.png'
import IMG5 from '../../assets/portfolio4.jpg'
import IMG6 from '../../assets/portfolio5.png'


const data =[
  {
    id:1,
    image:IMG1,
    title:"E-commerce website",
    github:"https://github.com/RameesAP/hypebeast",
    demo:"https://hyperbeast.shop/"
  },
  {
    id:2,
    image:IMG2,
    title:"The Fit Club",
    github:"https://github.com/RameesAP/gym-react",
    demo:"https://rameesfitclub.pages.dev/"
  },
  {
    id:3,
    image:IMG3,
    title:"Netflix-Clone",
    github:"https://github.com/RameesAP/netflix-react",
    demo:"https://soft-snickerdoodle-b9e478.netlify.app/"
  },
  {
    id:4,
    image:IMG4,
    title:"OLX-Clone",
    github:"https://github.com/RameesAP/olx-react",
    demo:"https://thunderous-mandazi-4ef9e3.netlify.app/"
  },
  // {
  //   id:5,
  //   image:IMG5,
  //   title:"E-commerce website",
  //   github:"https://github.com/RameesAP/hypebeast",
  //   demo:"https://hyperbeast.shop/"
  // },
  // {
  //   id:6,
  //   image:IMG6,
  //   title:"E-commerce website",
  //   github:"https://github.com/RameesAP/hypebeast",
  //   demo:"https://hyperbeast.shop/"
  // },
]

const portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className='container portfolio__container'>
        
        {
          data.map(({id,image,title,github,demo})=>{
            return(
              <article key={id} className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={image} alt={title} />
          </div>
          <h3>{title}</h3>
          <div className='portfolio__item-cta'>
            <a href={github} className='btn' target='_blank'>GitHub</a>
            <a href={demo} className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>

        </article>
            )
          })
        }
        
      </div>

    </section>
  )
}

export default portfolio