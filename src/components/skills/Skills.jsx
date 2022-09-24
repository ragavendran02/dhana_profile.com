import React from 'react'
import './skills.css'
import {FaReact} from 'react-icons/fa'
import {AiOutlineHtml5} from 'react-icons/ai'
import {FaCss3Alt} from 'react-icons/fa'
import {BsBootstrap} from 'react-icons/bs'
import {TbBrandJavascript} from 'react-icons/tb'
import {FaWordpressSimple} from 'react-icons/fa'


const Skills = () => {
  return (
    <section id='skills'>
      <h5>Get To Know</h5>
      <h2>My Skills</h2>
   <div className="container skills_container">
      
         <div className="skills_content">
             <div className="skills_cards">
                <article className='skills_card'>
                   <AiOutlineHtml5 className='skills_icon' />
                   <FaCss3Alt className='skills_icon' />
                   <h5>HTML / CSS</h5>
                   <div className='progressbar'>Experienced</div>
                </article>
                
                <article className='skills_card'>
                   <BsBootstrap className='skills_icon' />
                   <h5>BOOTSTRAP</h5>
                   <div className='progressbar'>Experienced</div>
                </article>
                <article className='skills_card'>
                   <TbBrandJavascript className='skills_icon' />
                   <h5>JAVASCRIPT</h5>
                   <div className='progressbar'>Intermediate</div>
                </article>
                <article className='skills_card'>
                   <FaWordpressSimple className='skills_icon' />
                   <h5>WORDPRESS</h5>
                   <div className='progressbar'>Intermediate</div>
                </article>
                <article className='skills_card'>
                   <FaReact className='skills_icon' />
                   <h5>REACT JS</h5>
                   <div className='progressbar'>Fresher</div>
                </article>
                
             </div>
             
         </div>
      

</div>
    </section>
  )
}

export default Skills