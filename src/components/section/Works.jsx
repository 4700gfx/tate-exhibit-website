import React from 'react'
import photography from '../images/photography.jpg'
import painting from '../images/painting.jpg'

const Works = () => {
  const typesOfWork = [
    {
      id: 1,
      title: "Photography",
      description: "We offer photography services capturing diverse scenes and moments",
      image: photography
    },
    {
      id: 2,
      title: "Paintings",
      description: "We create custom paintings that bring your vision to life",
      image: painting
    },
    {
      id: 3,
      title: "Creative Direction",
      description: "We provide creative direction to elevate your brand and projects",
      image: painting
    },
  ]

  return (
    <section className='bg-tate-platinum min-h-[90vh] w-[85vw] mt-4 mx-auto px-10 py-6 flex flex-col'>
      <h1 className='text-6xl font-bold mx-auto text-center'>Types of Work</h1>
      <p className='font-tate-secondary text-lg mx-auto mt-5 mb-10 text-center max-w-2xl'>
        My name is Tate and here are the different works that I offer.
      </p>
      
      <div className='works-container flex flex-row flex-wrap justify-center gap-6 mt-10 flex-1'>
        {typesOfWork.map((work) => (
          <div 
            key={work.id} 
            className='relative rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 w-full sm:w-[calc(50%-1.5rem)] lg:w-[calc(33.333%-1rem)] max-w-md h-[500px] group cursor-pointer'
            style={{
              backgroundImage: `url(${work.image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          >
            {/* Title - Always visible */}
            <div className='absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent'>
              <h2 className='text-2xl font-bold text-white'>{work.title}</h2>
            </div>
            
            {/* Description overlay - Shows on hover */}
            <div className='absolute inset-0 bg-black/75 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-6'>
              <div className='text-center'>
                <h2 className='text-3xl font-bold text-white mb-4'>{work.title}</h2>
                <p className='font-tate-secondary text-white text-lg'>{work.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Works