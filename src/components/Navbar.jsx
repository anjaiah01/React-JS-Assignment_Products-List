import React from 'react'
import hover from '../assets/hover.svg';
import profile from '../assets/profile.svg';
import love from '../assets/love.svg';
import logo from '../assets/logo.svg';
import search from '../assets/search.svg';
import cart from '../assets/cart.svg';

const Navbar = () => {
  return (
    <div className='flex flex-col w-full'>
        <div className='flex justify-between'>
            <img src={logo} alt="logo" />
            <p className='text-gray-900 text-5xl font-medium ml-48'>LOGO</p>
            <div className='flex flex-row justify-between gap-5'>
                <img src={search} />
                <img src={love} />
                <img src={cart} />
                <img src={profile} />
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