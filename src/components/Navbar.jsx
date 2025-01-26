import React from 'react'
import hover from '../assets/hover.svg';
import profile from '../assets/profile.svg';
import love from '../assets/love.svg';
import logo from '../assets/logo.svg';
import search from '../assets/search.svg';
import cart from '../assets/cart.svg';

const Navbar = () => {
  return (
    <div className='flex flex-col w-full p-4'>
        <div className='flex justify-between items-center'>
            <img src={logo} alt="logo" />
            <p className='text-gray-900 text-4xl font-bold ml-48'>LOGO</p>
            <div className='flex flex-row justify-between gap-5 items-center'>
                <img className='w-5 h-5' src={search} />
                <img className='w-5 h-5' src={love} />
                <img className='w-5 h-5' src={cart} />
                <img className='w-5 h-5' src={profile} />
                <div className='flex flex-row items-center gap-2 text-2xl'>
                    <p>ENG</p>
                    <img src={hover}/>
                </div>
            </div>
        </div>
        <div className='flex flex-row items-center mt-9 justify-center gap-5 text-xl text-medium'>
            <p>SHOP</p>
            <p>SKILLS</p>
            <p>STORIES</p>
            <p>ABOUT</p>
            <p>CONTACT US</p>
        </div>
    </div>
  )
}

export default Navbar