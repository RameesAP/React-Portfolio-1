import React from 'react'
import './footer.css'

import { AiOutlineInstagram } from 'react-icons/ai'
import { AiOutlineLinkedin } from 'react-icons/ai'
import { AiOutlineGithub } from 'react-icons/ai'

const footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>Ramees</a>

      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Exprerience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className='footer__socials'>
        <a href="https://www.instagram.com/_ramees__/"><AiOutlineInstagram /></a>
        <a href="https://www.linkedin.com/in/mohamed-ramees-3770b6178/"><AiOutlineLinkedin /></a>
        <a href="https://github.com/RameesAP"><AiOutlineGithub /></a>

      </div>

      <div className='footer__copyright'>
        <small>&copy; Ramees.All rights reserviced.</small>
      </div>
    </footer>
  )
}

export default footer