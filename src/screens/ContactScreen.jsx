
import React from 'react'
import { FaCode, FaEnvelope, FaEnvelopeOpen, FaEnvelopeOpenText, FaFacebook, FaFacebookMessenger, FaLink, FaMailBulk, FaMailchimp, FaPrint, FaQrcode, FaTwitter, FaVoicemail, FaWhatsapp } from 'react-icons/fa'
import Navbar from '../components/Navbar'

function ContactScreen() {
  return (
    <div>
       
    
        <div>
            <h2 className='font-semibold text-xl'>Reach Donors</h2>
            <span className='text-sm text-gray-500'> People want to be halp sharing ur liks</span>

        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-4 my-16'>
            <div className='flex items-center gap-2'>
                <FaLink className='text-4xl p-2 bg-purple-100 rounded-full text-purple-500'/>
                <div>
                    <h2>Copy Link</h2>
                    <p>Copy and share the link</p>
                </div>
            </div>

            <div  className='flex items-center gap-4 text-xl '>
                <FaFacebook className='p-2 text-5xl rounded-full bg-blue-500 text-white'/>
                <h2>Facebook</h2>
            </div>

            <div  className='flex items-center gap-4 text-xl '>
                <FaWhatsapp className='p-2 text-5xl rounded-full bg-green-500 text-white'/>
                <h2>Whatsapp</h2>
            </div>

            
            <div  className='flex items-center gap-4 text-xl '>
                <FaEnvelopeOpen className='p-2 text-5xl rounded-full bg-gray-200 text-black'/>
                <h2>Email</h2>
            </div>

            
            <div  className='flex items-center gap-4 text-xl '>
                <FaFacebookMessenger className='p-2 text-5xl rounded-full bg-blue-500 text-white'/>
                <h2>Messenger</h2>
            </div>

               
            <div  className='flex items-center gap-4 text-xl '>
                <FaTwitter className='p-2 text-5xl rounded-full bg-blue-500 text-white'/>
                <h2>X</h2>
            </div>

            <div  className='flex items-center gap-4 text-xl '>
                <FaQrcode className='p-2 text-5xl rounded-full bg-gray-500 text-white'/>
                <h2>Qr code</h2>
            </div>

            
            <div  className='flex items-center gap-4 text-xl '>
                <FaPrint className='p-2 text-5xl rounded-full bg-gray-500 text-white'/>
                <h2>Print</h2>
            </div>

            <div  className='flex items-center gap-4 text-xl '>
                <FaCode className='p-2 text-5xl rounded-full bg-gray-500 text-white'/>
                <h2>Copy widget</h2>
            </div>
        </div>





    </div>
  )
}

export default ContactScreen