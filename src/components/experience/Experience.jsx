import React from 'react'
import './experience.css'
import {AiFillStar} from 'react-icons/ai'

function Experience() {
  return (
    <section id='experience'>
      <h5>Get To Know</h5>
      <h2>My Professional Experience</h2>
   <div className="container experience_container">
      <div className='experience_me'>
         <div className="experience_image">
          
            <article className='bio_data'>
                <AiFillStar className='experience_icon' />
                <div className='job_role'>
                <h5>May 2022 - Present | MN Service Providers , Bangalore</h5>
                <p>WEB DEVELOPER</p>
                <ul>
                  <li>Here I was created a single page website for company site using desktop and mobile.</li>
                  <li>Fixed bugs from existing websites.</li>
                  <a className='weblink' href="https://mnserviceproviders.com">Click here to check MNSP webiste</a>
                </ul>
                </div>
            </article>

            <article className='bio_data'>
                <AiFillStar className='experience_icon' />
                <div className='job_role'>
                <h5>June 2021 - May 2022 | Nextbrain Technologies Private Limited , Bangalore</h5>
                <p>WEB DEVELOPER</p>
                <ul>
                 <li>Checked in to google speed insights.</li>
                 <li>Quality assurance of finished websites including the validations of web forms and links.</li>
                 <li>Responsive sites developed with Bootstrap.</li>
                  <a className='weblink' href="https://bewithus.com">Click here Bewithus Hotel webiste</a>
                </ul>
                <ul>
                 <li>Based on PSD file converted to html integration and used animations.</li>
                 <li>Added the blog images and meta data to ranking the site in SEO. </li>
                 <li>Responsive sites developed with Bootstrap.</li>
                  <a className='weblink' href="https://blinkbee.com">Click here Blinkbee webiste</a>
                </ul>
                </div>
            </article>
            
            <article className='bio_data'>
            <AiFillStar className='experience_icon' />
            <div className='job_role'>
            <h5>November 2019 - May 2020 | Neutrinos Private Limited , Bangalore</h5>
            <p>WEB DEVELOPER</p>
            <ul>
              <li>It is a tooling platform which we build drag and drop to build a design.</li>
              <li>Fixed bugs from existing websites.</li>
              <li>Bank insurance design i was worked in that neutrinos platform tool.</li>
            </ul>
            </div>
        </article>

         </div>
         
         </div>


</div>
    </section>
  )
}

export default Experience