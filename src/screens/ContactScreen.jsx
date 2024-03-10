import React from 'react'
import { FaFacebook, FaLink } from 'react-icons/fa'

function ContactScreen() {
  return (
    <div>
        <div>
            <h2 className='font-semibold text-xl'>Reach Donors</h2>
            <span className='text-sm text-gray-500'> People want to be halp sharing ur liks</span>

        </div>

        <div className='grid grid-cols-2'>
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
                <FaFacebook className='p-2 text-5xl rounded-full bg-blue-500 text-white'/>
                <h2>Facebook</h2>
            </div>
        </div>





    </div>
  )
}

export default ContactScreen