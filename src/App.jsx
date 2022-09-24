import React from 'react'
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import About from './components/about/About'
import Skills from './components/skills/Skills'
import Services from './components/services/Services'
import Experience from './components/experience/Experience'
import Portfolios from './components/portfolios/Portfolios'
import Testimonials from './components/testimonials/Testimonials'
import Contact from './components/contact/Contact'


const App = () => {
  return (
    <>
      <Header />
      <Nav />
      <About />
      <Skills />
      <Services />
      <Experience />
      <Testimonials />
      <Contact />
    </>
  )
}

export default App