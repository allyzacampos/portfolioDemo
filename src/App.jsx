import './App.css'
import About from './Sections/About'
import Nav from './Sections/Header'
import Hero from './Sections/Hero'
import { Services } from './Sections/Services'
import { SkillsAndExperience } from './Sections/SkillsAndExperience'


function App() {

  return (
    <div className='space-y-10'>
      <Nav />
      <Hero />
      <About />
      <Services />
      <SkillsAndExperience />
    </div>
  )
}

export default App
