import './App.css'
import './index.css'
import BlendSection from './components/section/BlendSection'
import Navbar from './components/section/Navbar'
import Hero from './components/section/Hero'
import AboutMe from './components/section/AboutMe'
import Works from './components/section/Works'
import Gallery from './components/section/Gallery'
import ContactMe from './components/section/ContactMe'

function App() {
  return (
    <div className='main-container'>
      <Navbar />
      <BlendSection variant="zoomIn" index={0} isFirst={true}>
        <Hero />
      </BlendSection>

      <BlendSection variant="slideUp" index={1}>
        <AboutMe />
      </BlendSection>

      <BlendSection variant="slideLeft" index={2}>
        <Works />
      </BlendSection>

      <BlendSection variant="slideUp" index={3}>
        <Gallery />
      </BlendSection>

      <BlendSection variant="slideRight" index={4} isLast={true}>
        <ContactMe />
      </BlendSection>
    </div>
  )
}

export default App