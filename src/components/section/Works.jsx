import React, { useState } from 'react';
import image1 from '../images/slick-1-color.jpeg'
import image2 from '../images/sunrise-bw.jpeg'
import image3 from '../images/market-color.jpeg'

const Works = () => {
  const galleryImages = [
    {
      title: "Slick Posing", 
      imageType: "color",
      person: true,
      src: image1,
      description: "A captivating portrait showcasing contemporary street style against an urban backdrop. The subject's confident posture and natural lighting create a striking composition that captures the essence of modern photography."
    },
    {
      title: "Black and White Sunrise", 
      imageType: "black and white",
      person: false,
      src: image2,
      description: "An ethereal monochrome landscape capturing the quiet majesty of dawn. The interplay of light and shadow creates a timeless atmosphere, emphasizing the raw beauty of nature's daily awakening."
    },
    {
      title: "Market Photo", 
      imageType: "color",
      person: true,
      src: image3,
      description: "A vibrant documentary-style photograph capturing the energy and authenticity of daily life. Rich colors and candid moments blend together, telling a story of community and human connection."
    },
    {
      title: "Urban Reflections", 
      imageType: "color",
      person: true,
      src: image3,
      description: "An exploration of city life through reflective surfaces and architectural elements. This piece examines the relationship between people and their urban environment, highlighting moments of stillness in constant motion."
    },
    {
      title: "Golden Hour Portrait", 
      imageType: "color",
      person: true,
      src: image1,
      description: "Bathed in warm, natural light, this portrait demonstrates the magical quality of the golden hour. Soft tones and genuine expressions combine to create an intimate and timeless photographic moment."
    },
  ];

  const [mainImage, setMainImage] = useState(galleryImages[0]);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [filterType, setFilterType] = useState('all');
  const [filterPerson, setFilterPerson] = useState('all');

  const handleImageChange = (img) => {
    if (img.src !== mainImage.src || img.title !== mainImage.title) {
      setIsTransitioning(true);
      setTimeout(() => {
        setMainImage(img);
        setIsTransitioning(false);
      }, 150);
    }
  };

  // Filter logic
  const filteredImages = galleryImages.filter(img => {
    const typeMatch = filterType === 'all' || img.imageType === filterType;
    const personMatch = filterPerson === 'all' || 
                       (filterPerson === 'person' && img.person) || 
                       (filterPerson === 'landscape' && !img.person);
    return typeMatch && personMatch;
  });

  // Don't auto-change main image when filters change

  return (
    <section className='bg-tate-platinum min-h-[90vh] w-[85vw] mt-4 mx-auto px-10 py-6 flex flex-col'>
      {/* Header Row */}
      <div className='hero-heading-row flex flex-row justify-between items-center text-3xl font-tate-primary mb-6'>
        <h1 className='font-semibold'>Tate.</h1>
        <h3 className='text-2xl'>Miami-Dade, Florida</h3>
      </div>

      {/* Filter Controls */}
      <div className='filter-controls flex flex-row gap-6 mb-6 items-center'>
        <div className='flex flex-col gap-2'>
          <label className='text-sm font-semibold font-tate-primary text-gray-700'>Image Type:</label>
          <div className='flex gap-2'>
            <button
              onClick={() => setFilterType('all')}
              className={`px-4 py-2 rounded transition-all ${
                filterType === 'all' 
                  ? 'bg-tate-black text-white' 
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              All
            </button>
            <button
              onClick={() => setFilterType('color')}
              className={`px-4 py-2  transition-all ${
                filterType === 'color' 
                  ? 'bg-tate-black text-white' 
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              Color
            </button>
            <button
              onClick={() => setFilterType('black and white')}
              className={`px-4 py-2 transition-all ${
                filterType === 'black and white' 
                  ? 'bg-tate-black text-white' 
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              B&W
            </button>
          </div>
        </div>

        <div className='flex flex-col gap-2'>
          <label className='text-sm font-semibold text-gray-700 font-tate-primary'>Subject:</label>
          <div className='flex gap-2'>
            <button
              onClick={() => setFilterPerson('all')}
              className={`px-4 py-2 rounded transition-all font-tate-primary ${
                filterPerson === 'all' 
                  ? 'bg-gray-800 text-white' 
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              All
            </button>
            <button
              onClick={() => setFilterPerson('person')}
              className={`px-4 py-2 rounded transition-all font-tate-primary ${
                filterPerson === 'person' 
                  ? 'bg-gray-800 text-white' 
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              Portrait
            </button>
            <button
              onClick={() => setFilterPerson('landscape')}
              className={`px-4 py-2 rounded transition-all ${
                filterPerson === 'landscape' 
                  ? 'bg-gray-800 text-white' 
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              Landscape
            </button>
          </div>
        </div>

        <div className='ml-auto text-sm text-gray-600 font-tate-primary text-3xl'>
          Showing {filteredImages.length} of {galleryImages.length} photos
        </div>
      </div>

      {/* Main Image Display */}
      <div className='main-image flex flex-row mb-6 ml-20 justify-center items-center flex-1'>
        <div 
          className={`image-description flex flex-col mt-30 mr-4 transition-all duration-500 ease-in-out ${
            isTransitioning ? 'opacity-0 translate-x-[-20px]' : 'opacity-100 translate-x-0'
          }`}
        >
          <h1 className='text-6xl mb-4'>
            {mainImage.title}
          </h1>
          <p className='text-lg font-tate-secondary w-8/12 leading-relaxed'>
            {mainImage.description}
          </p>
        </div>       
        <img
          src={mainImage.src}
          alt={mainImage.title}
          className={`max-h-[50vh] w-auto object-contain transition-all duration-500 ease-in-out ${
            isTransitioning ? 'opacity-0 scale-95' : 'opacity-100 scale-100'
          }`}
        />
      </div>

      {/* Gallery Thumbnails */}
      <div className='flex flex-row justify-center gap-4 flex-wrap'>
        {filteredImages.length > 0 ? (
          filteredImages.map((img, index) => (
            <button
              key={index}
              onClick={() => handleImageChange(img)}
              onMouseEnter={() => handleImageChange(img)}
              className={`focus:outline-none focus:ring-2 focus:ring-blue-500 transition-transform hover:scale-105 ${
                mainImage.src === img.src && mainImage.title === img.title ? 'scale-105 ring-2 ring-blue-600' : ''
              }`}
              aria-label={`View ${img.title}`}
            >
              <img
                src={img.src}
                alt={img.title}
                className='h-[20vh] w-auto object-cover rounded cursor-pointer border-2 border-transparent hover:border-gray-400'
              />
            </button>
          ))
        ) : (
          <div className='text-center text-gray-500 py-10'>
            <p className='text-xl'>No photos match the selected filters</p>
            <button 
              onClick={() => {
                setFilterType('all');
                setFilterPerson('all');
              }}
              className='mt-4 px-6 py-2 bg-gray-800 text-white rounded hover:bg-gray-700 transition-all'
            >
              Reset Filters
            </button>
          </div>
        )}
      </div>
    </section>
  );
}

export default Works;