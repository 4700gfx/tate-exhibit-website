import React, { useState } from 'react'
import image1 from '../images/slick-1-color.jpeg'
import image2 from '../images/market-color.jpeg'
import image3 from '../images/make-money-color.jpeg'
import image4 from '../images/lo-color.jpeg'

const AboutMe = () => {
  const [mainImage, setMainImage] = useState(image4);
  
  const galleryImages = [image1, image2, image3, image4];

  return (
    <section className='bg-tate-platinum min-h-[90vh] w-[85vw] mt-4 mx-auto p-10 flex flex-col'>
      <div className='hero-heading-row flex flex-row justify-between items-center text-3xl font-tate-primary mb-8'>
        <h1 className='font-semibold'>Tate.</h1>
        <h3 className='text-2xl'>Miami-Dade, Florida</h3>
      </div>
      <div className='flex'>
        <h1 className='text-6xl font-bold w-8/12 mx-auto mb-10'>Tate is a Photographer, Painter and Creative from Miami, Florida. This website is a compliation of creative pieces spanning from Photography to Painting and more.</h1>
      </div>
      <div className='bio-section mx-auto flex flex-row gap-6 w-full'>
        <div className='image-gallery-container flex flex-col w-1/2'>
          <img 
            src={mainImage} 
            alt='bio-pic'
            className='w-full h-[75vh] object-cover transition-all duration-300 shadow-lg'
          />
        </div>
        <div className='bio-text flex flex-col w-1/2'>
          <h1 className='text-5xl font-semibold mb-6'>About Tate.</h1>
          <p className='font-tate-secondary text-xl mb-4 w-full'>
            Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.
          </p>
          <br/>
          <p className='font-tate-secondary text-xl mb-4 w-full'>
            Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.
          </p>
          <br/>
          <p className='font-tate-secondary text-xl mb-4 w-full'>
            Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.
          </p>
          
          <div className='thumbnail-gallery grid grid-cols-2 gap-3 mt-6'>
            {galleryImages.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`thumbnail-${index}`}
                className='w-full h-[15vh] object-cover cursor-pointer opacity-70 hover:opacity-100 transition-opacity duration-200 border-2 border-transparent hover:border-gray-800 shadow-md'
                onMouseEnter={() => setMainImage(img)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutMe