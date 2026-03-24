import React, { useContext, useState } from 'react'
import Logo from '../../assets/icons/Exclude.svg?react'
import SideImage from '../../assets/images/Image.png'
import { AuthContext } from '@/context/AuthContext'
import { useNavigate } from 'react-router-dom'
import { toast } from "sonner"
import { Eye, EyeOff } from "lucide-react";

const Signin = () => {
    const [userName, setUserName] = useState('')
    const [userPassword, setUserPassword] = useState('')
    const [error, setError] = useState('')
    const [showPassword, setShowPassword] = useState(true)
    // const [username, setEmail] = useState('')
    // const [password, setPassword] = useState('')
const {getData, isLoading, isLoggedIn} = useContext(AuthContext)

    const navigate = useNavigate()
    const formData = async (e)=>{
        // e.preventDefault()
        console.log(e)
        console.log({username:userName, passsword: userPassword})

        const user = await getData(userName, userPassword)
        console.log(user)
        if(user.success){
            navigate('/admin')
        }
        else{
            setError(user.message)
            toast(user.message)
        }
    }
     const handleSubmit = async (e)=> {
      e.preventDefault()
      // clear the prev error
      setError('')
      console.log('Form Submitted', {username:userName, password:userPassword})

      const result = await getData(userName, userPassword)
      if(result.success){
        toast.success(result.message)
        navigate('/admin')
      }
      else{
        setError(result?.message)
        toast.error(result.message)
        
      }
    }


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
                    <h1 className='font-bold text-2xl md:text-4xl py-4'>Welcome back</h1>
                    <p className='text-[#78778B]'>Welcome back! Please enter your details</p>
                </div>
                
                <form className='mt-10'>
                    <label htmlFor="email" className='font-bold'>Email:</label><br />
                    <input 
                        onChange={(e)=>setUserName(e.target.value)}
                        type="text" 
                        id="email"
                        placeholder='Email or Phone Number' 
                        className='border border-[#bfbfbf] my-2 rounded-md px-7 md:w-100 py-2 md:py-3 outline-none w-full max-w-md' 
                    /> <br />

                    <label htmlFor="password" className='font-bold'>Password:</label><br />
                    <div className='flex relative'>
                         <input 
                        onChange={(e)=>setUserPassword(e.target.value)}
                        type={showPassword? 'password' : 'text'} 
                        id="password"
                        placeholder='Enter your password' 
                        className='border border-[#bfbfbf] my-2 rounded-md px-7 md:w-100 py-2 md:py-3 outline-none w-full max-w-md' 
                    /><br />

                    <span className='flex gap-3 absolute left-92 top-6'>
                        <Eye className={showPassword? 'flex' : 'hidden'} onClick={() => setShowPassword(false)}/>
                        <EyeOff className={showPassword? 'hidden' : 'flex'} onClick={() => setShowPassword(true)}/>
                    </span>
                    </div>

                    <div className='flex gap-4 text-[13px] mt-3 md:text-xl md:gap-8 font-medium'>
                        <label className="flex items-center gap-2">
                            <input type="checkbox" />
                            Remember for 30 Days
                        </label>
                        <a href="#" className='hover:underline'>Forgot password</a>
                    </div>
                    {/* <button 
                        onClick={formData}
                        className="w-full p-2 bg-[#C8EE44] text-white rounded flex items-center justify-center gap-2"
                        disabled={isLoading}
                        >
                        {isLoading ? (
                            <>
                            <LoaderCircle className="animate-spin w-5 h-5" />
                            Signing in...
                            </>
                        ) : (
                            "Sign in"
                        )}
                    </button> */}
                    <button 
                        onClick={(e) => handleSubmit(e)}
                         className='bg-[#C8EE44] mt-7 w-full max-w-md h-12 rounded-md md:text-xl font-medium hover:bg-[#b9d93d] transition-colors'
                        disabled={isLoading}
                        >
                        {isLoading ? (
                            <>
                            <LoaderCircle className="animate-spin w-5 h-5" />
                            Signing in...
                            </>
                        ) : (
                            "Sign in"
                        )}
                    </button>
                </form>
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

export default Signin