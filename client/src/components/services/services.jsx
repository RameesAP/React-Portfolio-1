import React from 'react'
import './services.css'
import { BiCheck } from 'react-icons/bi'

const services = () => {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className='container services__container'>
        <article className='service'>
          <div className="service__head">
            <h3>UI/UX Design</h3>
          </div>
          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon' />
              <p> Create user-friendly and aesthetically pleasing interfaces for web and mobile applications.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p> Using Figma: Design and prototype interactive features and animations using Figma's powerful tools and plugins.</p>
            </li>
            {/* <li>
              <BiCheck className='service__list-icon' />
              <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
            </li> */}
            {/* <li>
              <BiCheck className='service__list-icon' />
              <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
            </li> */}
            {/* <li>
              <BiCheck className='service__list-icon' />
              <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
            </li> */}
          </ul>
        </article>

        {/* END OF UX/UI */}

        <article className='service'>
          <div className="service__head">
            <h3>Front-End</h3>
          </div>
          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon' />
              <p> Implemented front end features such as authentication, routing, state management, and data visualization using React.js and various libraries</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p> Integrated RESTful APIs and web services to communicate with back end server and database using Express.js and Node.js</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p> Utilized MongoDB as a NoSQL database to store and retrieve data in JSON format</p>
            </li>
            {/* <li>
              <BiCheck className='service__list-icon' />
              <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
            </li> */}
            {/* <li>
              <BiCheck className='service__list-icon' />
              <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
            </li> */}
            {/* <li>
              <BiCheck className='service__list-icon' />
              <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
            </li> */}
          </ul>
        </article>

        {/* WEB DEVELOPMENT */}


        <article className='service'>
          <div className="service__head">
            <h3>Back-End</h3>
          </div>
          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon' />
              <p> Developed and deployed RESTful APIs using Node.js, Express.js and MongoDB for various web applications</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p> Implemented authentication, authorization and data validation using JWT, bcrypt and mongoose</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p> Utilized cloud services such as AWS, Heroku and MongoDB Atlas to host and scale the back end services</p>
            </li>
            {/* <li>
              <BiCheck className='service__list-icon' />
              <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
            </li> */}
            {/* <li>
              <BiCheck className='service__list-icon' />
              <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
            </li> */}
          </ul>
        </article>

        {/* END OF Content creation */}

      </div>
    </section>
  )
}

export default services