import { Fragment } from 'react'
import './App.css'
import About from './Sections/About'
import { Contact } from './Sections/Contact'
import { Footer } from './Sections/Footer'
import Nav from './Sections/Header'
import Hero from './Sections/Hero'
import Portfolio from './Sections/Portfolio'
import { Services } from './Sections/Services'
import { SkillsAndExperience } from './Sections/SkillsAndExperience'


function App() {

  return (
    <Fragment>
      <Nav />
      <Hero />
      <About />
      <Services />
      <SkillsAndExperience />
      <Portfolio />
      <Contact />
      <Footer />
    </Fragment>
  )
}

export default App
