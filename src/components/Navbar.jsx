import React from 'react'
import { FaShoppingCart} from "react-icons/fa"
import Logo from "./logo.png"
import { NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'

const Navbar = () => {
  const {cart} = useSelector((state) => state)
  return (
    <div>
      <nav className='flex justify-between items-center h-20 max-w-6xl mx-auto'>
      <NavLink to='/'>
        <div className='ml-5'>
          <img src={Logo} alt="Logo" className='h-14'/>
        </div>
      </NavLink>
        
        <div className='flex items-center font-medium text-slate-100 mr-5 space-x-6'>
          <NavLink to='/'>
            <p className='bg-black-500'>Home</p>
          </NavLink>
          <NavLink to='/cart'>
              <div className='relative'>               
                <FaShoppingCart className='text-2xl'/>
                {
                  cart.length >0 &&
                  <span className='absolute -top-2 -right-2 bg-green-600 text-xs w-5 h-5 rounded-full flex justify-center items-center animate-bounce text-white'>{cart.length}</span>
                }
              </div>
          </NavLink> 
        </div>
      </nav>
    </div>
  )
}

export default Navbar