import React from 'react'
import Logo from "../assets/images/wlogo.png"

const Footer = () => {
  return (
    <div className=' bg-[#120B48] flex flex-row max-md:flex-col max-sm:flex-col text-white justify-around gap-12 items-center pt-6'>
        <div className=' flex flex-row items-center'>
            <img src={Logo} alt="logo" className=' w-[40px] h-[40px] mr-2' />
            <p>HelpMeOut</p>
        </div>
        <div className=' flex flex-col '>
            <h5>Menu</h5>
            <a href="#">Home</a>
            <a href="#">Converter</a>
            <a href="#">How it work</a>
        </div>
        <div className=' flex flex-col'>
            <h5>About Us</h5>
            <a href="#">About</a>
            <a href="#">Contact us</a>
            <a href="#">privacy Policy</a>
        </div>
        <div className='flex flex-col '>
            <h5>Screen Record</h5>
            <a href="#">Brower Window</a>
            <a href="#">Desktop</a>
            <a href="#">Application</a>
        </div>
    </div>
  )
}

export default Footer