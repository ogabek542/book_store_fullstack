import React from 'react'
import bannerImg from "../../assets/banner.png";

const Banner = () => {



  return (
    <div className='flex flex-col md:flex-row-reverse py-16 justify-between items-center gap-12 '>
        {/* left side */}
        <div className='md:w-1/2 w-full flex items-center md:justify-end'>
            <img src={bannerImg} alt="banner image" />
        </div>
        {/* right side  */}
        <div className='md:w-1/2 w-full ' >
            <h1 className="md:text-5xl text-2xl font-medium mb-7">New Releases This Week</h1>
            <p className='mb-10'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi sunt assumenda illum odit laboriosam soluta? Libero, eum? Consequuntur impedit doloribus, laborum quis alias optio est. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae, quae.  </p>
            <button className='btn-primary'> Subscribe</button>
        </div>
        
      
    </div>
  )
}

export default Banner
