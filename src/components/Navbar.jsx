import React from 'react'
import {Link} from "react-router-dom"
import {HiMiniBars3CenterLeft} from "react-icons/hi2"
import {IoSearchOutline} from "react-icons/io5"




const Navbar = () => {
  return (
    <header className='max-w-screen-2xl mx-auto px-4 py-6'>
        <nav className='flex justify-between items-center'>
          {/* left side */}
          <div className='flex items-center'>
            <Link to="/">
              <HiMiniBars3CenterLeft className='size-6'/>
            </Link>
            {/* <==== search input ====> */}
            <div>
              <IoSearchOutline/>
              <input type='text' placeholder='Search here' className="bg-[#eaeaea] w-full py-1 md:px-8 px-6 rounded-md focus:outline-none "  />
            </div>
          </div>


          {/* <==== right side ====> */}
          <div>
            nav items
          </div>
        </nav>
    </header>
  )
}

export default Navbar
