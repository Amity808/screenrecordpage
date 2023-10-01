import React from 'react'
import Logo from "../assets/images/logo.png"

const NavBar = () => {
  return (
    <div className=' flex justify-between text-base font-medium text-[color: var(--primary-primary-600, #100A42)]'>
        <div className=' flex flex-row items-center'>
            <img src={Logo} alt="HelpMeOut" className=' pr-2' />
            <p className=''>HelpMeOut</p>
        </div>
        <div className=' flex flex-row'>
            <p className=' pr-[40px]'>Features</p>
            <p>How it Works</p>
        </div>
        <div>
            <p>Get Started</p>
        </div>
    </div>
  )
}

export default NavBar