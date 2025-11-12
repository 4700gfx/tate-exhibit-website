import React from 'react'
import image1 from '../images/slick-bw.jpeg'
import image2 from '../images/sunrise-bw.jpeg'
import image3 from '../images/blacksuit-bw.jpeg'
import image4 from '../images/blackwoman-bw.jpeg'



const Hero = () => {
  const heroImages = [image1, image2, image3, image4]


  return (
    <section className='bg-tate-platinum h-[90vh] w-[85vw] mt-4 mx-auto p-10'>
      <div className='hero-heading-row flex flex-row justify-between text-3xl font-tate-primary'>
        <h3> Tate.</h3>
        <h3>Miami-Dade, Florida</h3>
      </div>

      <div className='hero-tagline text-6xl font-tate-secondary mt-24 '>
        <p>From the Lens of a Creative</p>
        <p>Bring Memories solidified in Light Forever</p>
        <p>Venture into the Creative Works of Tate</p>
      </div>

      <div className='hero-gallery flex flex-row mx-auto'> 
        {heroImages.map((img) =>(        
          <img 
          src={img} 
          alt='image' 
          className='h-[50vh] mx-5 mt-10'  
          />
        ))}
      </div>
    </section>
  )
}

export default Hero