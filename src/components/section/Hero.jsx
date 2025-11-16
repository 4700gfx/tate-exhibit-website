import React from 'react'
import image1 from '../images/slick-bw.jpeg'
import image2 from '../images/sunrise-bw.jpeg'
import image3 from '../images/blacksuit-bw.jpeg'
import image4 from '../images/blackwoman-bw.jpeg'

const Hero = () => {
  const heroImages = [
    { src: image1, alt: 'Slick portrait in black and white' },
    { src: image2, alt: 'Sunrise landscape in black and white' },
    { src: image3, alt: 'Black suit portrait in black and white' },
    { src: image4, alt: 'Portrait of black woman in black and white' }
  ]

  return (
    <section className='bg-tate-platinum min-h-[90vh] w-[85vw] mt-4 mx-auto p-10 flex flex-col'>
      {/* Header Row */}
      <div className='hero-heading-row flex flex-row justify-between items-center text-3xl font-tate-primary mb-8'>
        <h1 className='font-semibold'>Tate.</h1>
        <h3 className='text-2xl'>Miami-Dade, Florida</h3>
      </div>

      {/* Tagline Section */}
      <div className='hero-tagline font-bold text-3xl md:text-6xl font-tate-primary mt-16 mb-auto leading-tight'>
        <h1>From the Lens of a Creative</h1>
        <h1>Bring Memories Solidified in Light Forever</h1>
        <h1>Venture into the Creative Works of Tate</h1>
      </div>

      {/* Gallery Section */}
      <div className='hero-gallery flex flex-row gap-5 overflow-x-auto mt-10 pb-4'>
        {heroImages.map((image, index) => (
          <img 
            key={index}
            src={image.src} 
            alt={image.alt}
            className='h-[50vh] object-cover rounded-sm shadow-lg hover:scale-105 transition-transform duration-300 ease-in-out flex-shrink-0'
          />
        ))}
      </div>
    </section>
  )
}

export default Hero