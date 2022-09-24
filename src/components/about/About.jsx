import React from 'react'
import './about.css'
import {FaAward} from 'react-icons/fa'
import {BiCurrentLocation} from 'react-icons/bi'
import {AiOutlineMail} from 'react-icons/ai'
import {FaBirthdayCake} from 'react-icons/fa'
import {FaLanguage} from 'react-icons/fa'
import {AiOutlineContacts} from 'react-icons/ai'
import {BiDonateBlood} from 'react-icons/bi'
import {AiFillFlag} from 'react-icons/ai'
import {BsFillBriefcaseFill} from 'react-icons/bs'
import {AiFillProject} from 'react-icons/ai'

const about = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>
   <div className="container about_container">
      <div className='about_me'>
         <div className="about_image">
            <article className='bio_data'>
                <BiCurrentLocation className='biodata_icon' />
                <h5>Bangalore</h5>
            </article>
            <article className='bio_data'>
                <AiOutlineMail className='biodata_icon' />
                <h5>dhanaragavendran1995@gmail.com</h5>
            </article>
            <article className='bio_data'>
                <FaBirthdayCake className='biodata_icon' />
                <h5>Jan 2 1995</h5>
            </article>
            
            
         </div>
         <div className="about_image">
            <article className='bio_data'>
                <FaLanguage className='biodata_icon' />
                <h5>English , Tamil</h5>
            </article>
            <article className='bio_data'>
                <AiOutlineContacts className='biodata_icon' />
                <h5>9994428989</h5>
            </article>
            <article className='bio_data'>
                <BiDonateBlood className='biodata_icon' />
                <h5>O +ve</h5>
            </article>
            <article className='bio_data'>
                <AiFillFlag className='biodata_icon' />
                <h5>Indian</h5>
            </article>
            
         </div>
         </div>
         <div className="about_content">
             <div className="about_cards">
                <article className='about_card'>
                   <BsFillBriefcaseFill className='about_icon' />
                   <h5>Experience</h5>
                   <small>2+ years </small>
                </article>
                
                <article className='about_card'>
                   <AiFillProject className='about_icon' />
                   <h5>Projects</h5>
                   <small>6+ completed</small>
                </article>
             </div>
             <p>My designation is based on front end developer. I am passionate about building a excellent software development user-friendly.</p>
         </div>
      

</div>
    </section>
  )
}

export default about