import React from 'react'
import Logo from "../assets/images/logo.png"
import google from "../assets/images/google.png"
import facesign from "../assets/images/facesign.png"

const SignUp = () => {
  return (
    <div className=' '>
        <div className=' flex flex-row items-center py-[52px] px-[100px]'>
            <img src={Logo} alt="HelpMeOut" className=' pr-2' />
            <p className=' font-bold'>HelpMeOut</p>
        </div>
        <div className=' flex items-center flex-col justify-center'>
            <h1 className=' text-[32px] font-bold text-[141414] mb-4'>Log in or Sign up</h1>
            <p>Join millions of others in sharing successful <br /> moves on HelpMeOut.</p>
        <div>
            <button className=' font-medium text-sm  flex flex-row mt-[32px] border-1 border-solid border py-[10px] rounded-md px-[100px]'>
                <img src={google} alt="logo" className=' w-[24px] h-[24px] mr-2' />
                <p>Continue with Google</p>
            </button>
            <button className=' font-medium text-sm  flex flex-row mt-[32px] border-1 border-solid border py-[10px] rounded-md px-[92px]'>
                <img src={facesign} alt="logo" className=' w-[24px] h-[24px] mr-2' />
                <p>Continue with Facebook</p>
            </button>
        </div>
        <div className=' flex mt-[32px] items-center gap-2'>
            <span className=' border-t-2 w-[180px] max-sm:w-[100px]'>
            </span>
            <p>or</p>
            <span className=' border-t-2 w-[180px] max-sm:w-[100px]'>
            </span>
        </div>
        <div className='flex flex-col'>
            <div className='flex flex-col'>
                <label htmlFor="email" className='mr-[350px] max-sm:mr-[250px] max-md:mr-[300px] '>Email</label>
                <input type="email" name="email" id="email" placeholder='Enter your email address' className=' py-[16px] px-2 border-solid border rounded-md mt-3 text-[#626262] font-medium' />
            </div>
            <div className='flex flex-col mt-3'>
                <label htmlFor="password" className='mr-[350px] max-sm:mr-[250px] max-md:mr-[300px]'>Password</label>
                <input type="password" name="password" id="password" placeholder='Enter your password' className=' py-[16px] px-2 border-solid border rounded-md mt-3 text-[#626262] font-medium' />
            </div>
        </div>
        <button className=' bg-[#120B48] py-[16px] px-[185px] max-md:px-[140px] rounded-md text-white mt-[32px] mb-5'>Sign Up</button>
        </div>
    </div>
  )
}

export default SignUp