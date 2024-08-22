import React from 'react'
import { Link } from 'react-router-dom'
import {toast} from 'react-hot-toast'
import Logo from '../assets/Logo.svg'

const Navbar = (props) => {

    let isLoggedIn = props.isLoggedIn;
    let setIsLoggedIn = props.setIsLoggedIn;


  return (
    <div className='flex justify-between items-center w-11/12 max-w-[1160px] py-4 mx-auto'>
      
      <Link to="/">
        <img src={Logo} alt="study notion logo" loading='lazy' />
      </Link>

      <nav>
        <ul className='flex gap-x-6 text-gray-400'>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/">About</Link>
            </li>
            <li>
                <Link to="/">Contact</Link>
            </li>
        </ul>
      </nav>

      {/* login signup logout dashboard buttons */}

      <div className='flex items-center gap-x-4'>

        {/* here curly brackets are used to define when the button should be displayed */}
        { !isLoggedIn &&
            <Link to="/login">
                <button className='bg-stone-800  text-gray-400 py-[8px] px-[12px] rounded-[8px] border border-stone-800 '>
                    Login
                </button>
            </Link>
        }
        { !isLoggedIn &&
            <Link to="/signup">
                <button className='bg-stone-800  text-gray-400 py-[8px] px-[12px] rounded-[8px] border border-stone-800 '>
                    Sign up
                </button>
            </Link>
        }
        { isLoggedIn &&
            <Link to="/">
                <button className='bg-stone-800 text-gray-400 py-[8px] px-[12px] rounded-[8px] border border-stone-800 '
                onClick={() => {
                    setIsLoggedIn(false);
                    toast.success('Logged out successfully');
                }}>
                    Log Out
                </button>
            </Link>
        }
        { isLoggedIn &&
            <Link to="/dashboard">
                <button className='bg-stone-800  text-gray-400 py-[8px] px-[12px] rounded-[8px] border border-stone-800 '>
                    Dashboard
                </button>
            </Link>
        }
      </div>

    </div>
  )
}

export default Navbar
