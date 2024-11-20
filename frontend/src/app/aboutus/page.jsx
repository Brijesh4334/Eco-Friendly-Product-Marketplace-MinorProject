import Link from 'next/link'
import React from 'react'

const aboutus = () => {
  return (
    
    <div>
       
<section className="text-gray-600 body-font">
  <div className="container mx-auto flex flex-col px-5 py-24 justify-center items-center">
  <h1 className='mb-5 font-sans text-3xl font-bold tracking-tight text-brown-900 sm:text-4xl sm:leading-none '>About Us</h1>
    <img
      className="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded"
      alt="hero"
      src="https://www.recraft.in/images/our-mission-vision.jpg"
    />
    <div className="w-full md:w-2/3 flex flex-col mb-16 items-center text-center">
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-black-500">
        Eco-friendly Products Market Place
      </h1>
      <p className="mb-8 leading-relaxed">
      We are a passionate team of environmental advocates who believe in the power of small changes to make a big impact. Our journey began with a desire to reduce waste and offer products that are better for both people and the planet. From everyday essentials to innovative, earth-friendly alternatives, we carefully curate our offerings to ensure they align with our core values of sustainability, transparency, and ethical production.

      </p>
      
       
    </div>
  </div>
</section>
</div>
)}
export default aboutus
