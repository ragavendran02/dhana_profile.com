import React from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {AiOutlineWhatsApp} from 'react-icons/ai'

const contact = () => {
  return (
    <section id='contact'>
        <h5>Get in Touch</h5>
        <h2>Contact Me</h2>
        <div className='container contact_container'>
        <div className='contact_options'>
        <article className='contact_option'>
           <MdOutlineEmail />
           <h4>Email</h4>
           <h5>ragav@gmail.com</h5>
           <p><a href="mailto:ragavendran.rpgs@gmail.com">Send email</a></p>
          
        </article>
        <article className='contact_option'>
        <AiOutlineWhatsApp />
        <h4>Whatsapp</h4>
        <h5>+9876543210</h5>
        <p><a href="https://api.whatsapp.com/send?phone=+9994428989">Send a message</a></p>
        </article>
     </div>
      
     <div className='form'>
       <form>
        <input type="text" name="name" placeholder="Enter a name" required/>
        <input type="mail" name="email" placeholder="Enter a mail" required />
        <textarea rows="4" name="message" placeholder="Enter a message" required></textarea>
        <button type="submit" className="btn btn-primary">Send a message</button>
        </form>
     </div>

        </div>
    </section>
  )
}

export default contact