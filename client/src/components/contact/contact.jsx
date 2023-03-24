import React from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {RiMessengerLine} from 'react-icons/ri'
import {AiOutlineLinkedin} from 'react-icons/ai'


const contact = () => {
  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className='container contact__container'>
        <div className='contact__options'>
          <article className='contact__option'>
            <MdOutlineEmail  className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>rameeswork@gmail.com</h5>
            <a href="mailto:rameeswork@gmail.com" target='_blank'>Send a Message</a>
          </article>
          <article className='contact__option'>
            <RiMessengerLine  className='contact__option-icon'/>
            <h4>Instagram</h4>
            <h5>__ramees_</h5>
            <a href=" https://ig.me/m/_ramees__" target='_blank'>Send a Message</a>
          </article>
          <article className='contact__option'>
            <AiOutlineLinkedin  className='contact__option-icon'/>
            <h4>LinkedIn</h4>
            <h5>Mohamed Ramees</h5>
            <a href="https://www.linkedin.com/in/mohamed-ramees-3770b6178/" target='_blank'>Send a Message</a>
          </article>
        </div>

        {/* END OF CONTACT OPTION */}
        <form action="">
          <input type="text" name='name' placeholder='Your full name' required/>
          <input type="email" name='email' placeholder='Your Email' required/>
          <textarea name="Meassage" rows="7" placeholder='Your Message'></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
    )
}

export default contact