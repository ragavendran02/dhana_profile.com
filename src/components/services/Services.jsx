import React from 'react'
import './services.css'
import {AiFillGithub} from 'react-icons/ai'
import {MdOutlineWeb} from 'react-icons/md'
import {AiOutlineMobile} from 'react-icons/ai'
import {DiPhotoshop} from 'react-icons/di'
import {FaBug} from 'react-icons/fa'
import {FaWordpressSimple} from 'react-icons/fa'

function Services() {
  return (
    <section id='services'>
    <h5>Get To Know</h5>
    <h2>My Services</h2>
 <div className="container services_container">
    
       <div className="services_content">
           <div className="services_cards">
              <article className='services_card'>
                 <MdOutlineWeb className='services_icon' />
                 <h5>WEB DEVELOPMENT</h5>
                 <div className='service_describe'>
                 Web developing a single static page of plain text to complex web applications, businesses, and social network services.
                 </div>
              </article>
              <article className='services_card'>
                 <AiOutlineMobile className='services_icon' />
                 <h5>MOBILE RESPONSIVE</h5>
                 <div className='service_describe'>
                 Using the design we can do responsive for desktop, mobile, and iPad too. Based on the devices responsive will works.
                 </div>
              </article>
              <article className='services_card'>
                 <DiPhotoshop className='services_icon' />
                 <h5>PSD TO HTML</h5>
                 <div className='service_describe'>
                 The design will have using Adobe photoshop and Figma , that PSD file i can convert into html integration.
                 </div>
              </article>
              <article className='services_card'>
                 <FaBug className='services_icon' />
                 <h5>BUG FIXING</h5>
                 <div className='service_describe'>
                 Wherever the design layout , icons and the images issues i can able to solve that certainly.
                 </div>
              </article>
              <article className='services_card'>
                 <FaWordpressSimple className='services_icon' />
                 <h5>WORDPRESS</h5>
                 <div className='service_describe'>
                 Without using the templates i can use the customize layout as per design using elementor.
                 </div>
              </article>
              <article className='services_card'>
                 <AiFillGithub className='services_icon' />
                 <h5>GIT</h5>
                 <div className='service_describe'>
                 After the code changes, the code will push in to main branch using git version control.
                 </div>
              </article>
              
           </div>
           
       </div>
    

</div>
  </section>
  )
}

export default Services
