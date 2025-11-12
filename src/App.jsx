import './App.css'
import './index.css'
import Navbar from './components/section/Navbar'
import Hero from './components/section/Hero'
import AboutMe from './components/section/AboutMe'
import Works from './components/section/Works'
import Gallery from './components/section/Gallery'
import ContactMe from './components/section/ContactMe'
import Footer from './components/section/Footer'

function App() {

  return (
    <div className='main-container'>
    <Navbar />
    <Hero />
    {/* <AboutMe />
    <Works />
    <Gallery />
    <ContactMe />
    <Footer /> */}
    </div>
  )
}

export default App
