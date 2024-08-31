import React from 'react'
import {headerLogo} from '../assets/images'
import {hamburger} from '../assets/icons'
import { navLinks } from '../constants'

const Nav = () => {
  return (
    <header className='padding-x py-8 absolute z-20 w-full border-b-2 
    drop-shadow-md'>
      <nav className='flex justify-between items-center max-container'>
        <a href='#'>
          <img src={headerLogo}
              alt='Logo'
              width={130}
              height={30}
          ></img>
        </a>
        <ul className='flex flex-1 
        justify-center 
        items-center gap-16 max-lg:hidden'>
          {navLinks.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className='font-montserrat
                leading-normal text-lg text-coral-red hover:bg-coral-red hover:text-blue-200 
                py-[6px] px-5 rounded-full hover:shadow-cus1 hover:shadow-black duration-75
                '
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <div className='hidden max-lg:block'>
          <img src={hamburger} width={25} height={25}></img>
        </div>
      </nav>
    </header>
  )
}

export default Nav