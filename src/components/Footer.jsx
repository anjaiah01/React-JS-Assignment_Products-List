import React from 'react'
import usa from '../assets/usa.svg'
import instagram from '../assets/instagram.svg'
import linkedin from '../assets/linkedin.svg'
const Footer = () => {
  return (
    <div className='flex flex-col bg-black text-white'>
        <div className='flex flex-row justify-between p-5'>
            <div className='flex flex-col gap-4'>
                <p className='font-bold'>BE THE FIRST TO KNOW</p>
                <p>Sign up for updates from mettā muse.</p>
                <div className='flex flex-row gap-2'>
                    <input className='bg-white text-black rounded p-2' type='email' placeholder='enter e-mail'/>
                    <button className='p-4 border-1 rounded'>Subscribe</button>
                </div>
            </div>
            <div className='flex flex-col gap-4'>
                <p className='font-semibold'>CONTACT</p>
                <p>+91 1234567890</p>
                <p>ecommerce123@gmail.com</p>
                <p className='font-semibold'>CURRENCY</p>
                <div className='flex flex-row gap-1'>
                    <img className='rounded-full' src={usa} alt=""/>
                    <p className='p-1 bg-white rounded-full'></p>
                    <p>USD</p>
                </div>
                <p className='text-xs'>Transactions will be completed in Euros and a currency reference is available on hover.</p>
            </div>
        </div>
        <hr className='w-full '/>
        <div>
            <div>
                <p>mettā muse</p>
                <ul className='flex flex-col gap-2'>
                    <li>About Us</li>
                    <li>Stories</li>
                    <li>Artisians</li>
                    <li>Boutiques</li>
                    <li>Contact Us</li>
                    <li>EU Compliances Docs</li>
                </ul>
            </div>
            <div>
                <p>QUICK LINKS</p>
                <ul>
                    <li>Orders&Shipping</li>
                    <li>Join/Login as a Seller</li>
                    <li>Payment&Pricing</li>
                    <li>Return & Refund</li>
                    <li>FAQ's</li>
                    <li>Privacy Policy</li>
                    <li>Terms & Conditions</li>
                </ul>
            </div>
            <div>
                <p>FOLLOW US</p>
                <div>
                    <img src={instagram} alt=""/>
                    <img src={linkedin} alt=""/>
                </div>
            </div>
        </div>
        <p className='text-center'>Copyright © 2023 mettamuse. All rights reserved.</p>
    </div>
  )
}

export default Footer