import React from 'react'
import Logo from '../../assets/icons/Exclude.svg?react'
import SideImage from '../../assets/images/Image.png'
import { Link } from 'react-router-dom'

const Signup = () => {
  return (
    <div className='flex min-h-screen px-3 md:px-15'>
            {/* Left Section - Form */}
            <div className='flex-1 flex flex-col'>
                <div className='flex gap-2 ml-16 mt-10 font-extrabold text-xl'>
                    <Logo />
                    <h1>Maglo.</h1>
                </div>
                
                <div className='mt-20 px-10 flex-1'>
                    <div>
                        <h1 className='font-bold text-2xl md:text-4xl py-4'>Create new account</h1>
                        <p className='text-[#78778B]'>Welcome back! Please enter your details</p>
                    </div>
                    
                    <div className='mt-10'>
                        <label htmlFor="email" className='font-bold'>Full Name</label><br />
                        <input 
                            type="text" 
                            id="text"
                            placeholder='Enter full name' 
                            className='border border-[#bfbfbf] my-2 rounded-md px-7 md:w-100 py-2 md:py-3 outline-none w-full max-w-md' 
                        /> <br />
    
                        <label htmlFor="password" className='font-bold'>Email:</label><br />
                        <input 
                            type="Email" 
                            id="Email"
                            placeholder='Enter your email' 
                            className='border border-[#bfbfbf] my-2 rounded-md px-7 md:w-100 py-2 md:py-3 outline-none w-full max-w-md' 
                        /> <br />

                        <label htmlFor="password" className='font-bold'>Password:</label><br />
                        <input 
                            type="Password" 
                            id="Password"
                            placeholder='Enter your Password' 
                            className='border border-[#bfbfbf] my-2 rounded-md px-7 md:w-100 py-2 md:py-3 outline-none w-full max-w-md' 
                        /> <br />
    
                        <button 
                            type="button" 
                            className='bg-[#C8EE44] mt-7 w-full max-w-md h-12 rounded-md md:text-xl font-medium hover:bg-[#b9d93d] transition-colors'
                        >
                           Create Account
                        </button>
                        <p>
                            Already have an account? <Link to="/signin">Sign in</Link> 
                        </p>
                    </div>
                </div>
            </div>
    
            {/* Right Section - Image */}
            <div className="hidden md:block md:w-1/2 lg:w-2/5 relative">
                <img
                    src={SideImage}
                    alt="Side illustration"
                    className="absolute inset-0 w-full h-full object-cover"
                />
            </div>
        </div>
  )
}

export default Signup