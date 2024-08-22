import React from 'react'
import frameImg from '../assets/frame.png'
import LoginForm from './LoginForm'
import SignupForm from './SignupForm'
import {FcGoogle} from 'react-icons/fc'

const Template = ({title, desc1, desc2, image, formType, setIsLoggedIn}) => {
  return (
    <div className='flex w-11/12 max-w-[1160px] py-12 mx-auto gap-x-12 gap-y-0 justify-between'>

      <div className='w-11/12 max-w-[450px]'>
          <h1 className='text-white font-semibold text-[1.875rem] leading-[2.375rem]'>{title}</h1>
          <p className='text-[1.125rem] leading-[1.625rem] mt-4 '>
            <span className='text-white'>{desc1} </span>
            <br />
            <span className='text-blue-100 italic'>{desc2} </span>
          </p>

          {/* here it can be seen which form details to be shown on the page*/}
          {formType === "signup" ? 
          (<SignupForm setIsLoggedIn={setIsLoggedIn}/>): (<LoginForm setIsLoggedIn={setIsLoggedIn}/>)}

          <div className='flex w-full items-center my-4 gap-x-2'>
            <div className='w-full h-[1px] bg-slate-700'></div>
            <p className='text-slate-700 font-medium leading-[1.375rem]'>OR</p>
            <div className='w-full h-[1px] bg-slate-700'></div>
          </div>

          <button className='text-white w-full flex items-center justify-center rounded-[8px] font-medium border border-slate-700 px-[12px] py-[8px] gap-x-2 mt-6 ' >
            <FcGoogle />
            <p className=''>Sign up with Google</p>
          </button>
      </div>

      <div className='relative w-11/12 max-w-[450px] lg:order-1 '>
            <img src={frameImg} alt="pattern" width={558} height={504} loading='lazy' />

            <img src={image} alt="students" width={558} height={504} loading='lazy' 
            className='absolute -top-4 right-4'
            />
      </div>

    </div>
  )
}

export default Template
