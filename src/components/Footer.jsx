import React from 'react'
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa'

function Footer() {
  return (
    <div>
          <footer className="footer p-10 bg-white text-base-content">
    <aside>
      
      <h2 className='font-bold text-2xl text-green-800'>Go Fund Me</h2>
    </aside> 
    <nav>
      <h6 className="footer-title">Services</h6> 
      <a className="link link-hover">Branding</a>
      <a className="link link-hover">Design</a>
      <a className="link link-hover">Marketing</a>
      <a className="link link-hover">Advertisement</a>
    </nav> 
    <nav>
      <h6 className="footer-title">Company</h6> 
      <a className="link link-hover">About us</a>
      <a className="link link-hover">Contact</a>
      <a className="link link-hover">Jobs</a>
      <a className="link link-hover">Press kit</a>
    </nav> 
    <nav>
      <h6 className="footer-title">Legal</h6> 
      <a className="link link-hover">Terms of use</a>
      <a className="link link-hover">Privacy policy</a>
      <a className="link link-hover">Cookie policy</a>
    </nav>

  
  </footer>

  <div className='container mx-auto '>
    <div className='flex items-center justify-between'>
        <div> 
            <button className='btn'>select language</button>
        </div>

        <div className='flex justify-around gap-4'>
            <FaFacebook/>
            <FaTwitter/>
            <FaInstagram/>
        </div>


    </div>

    <div className='flex justify-between my-5'>
        <div className='flex items-center gap-4'>
            <span className='text-sm text-gray-500'>2020-2024 </span>
            <ul className='flex justify-between gap-4'>
                <li>service</li>
                <li>about</li>
                <li>terms</li>
            </ul>
        </div>
        <div></div>



    </div>
    

  </div>


    </div>
  
  )
}

export default Footer