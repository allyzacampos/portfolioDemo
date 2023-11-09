import './App.css'
import About from './Sections/About'
import Nav from './Sections/Header'
import Hero from './Sections/Hero'
import { Services } from './Sections/Services'


function App() {

  return (
    <div className='space-y-10'>
      <Nav />
      <Hero />
      <About />
      <Services />
    </div>
  )
}

export default App
