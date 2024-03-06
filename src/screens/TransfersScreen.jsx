import { Button } from '@material-tailwind/react'
import React from 'react'
import { FaArrowLeft, FaArrowRight, FaCheckCircle } from 'react-icons/fa'

function TransfersScreen() {
  return (
    <>
    <div>
        <h2 className='font-bold text-4xl leading-snug'>Transfers</h2>
    </div>

    <div className='my-8'>
        <h2 className='font-bold text-3xl leading-none'>Set up transfers</h2>
    </div>

    <div>
        <div className="alert p-8">
       <FaCheckCircle className='text-3xl text-green-800 '/>
          <span>12 unread messages. Tap to see.</span>
        </div>
    </div>

    <div>
        <div className='p-8 rounded-lg bg-green-800 text-white my-5'>
            <div className='my-4'>
            <div className="badge  badge-lg !bg-white text-green-800 !text-1xl">2</div>
            </div>

            <div className=''>
                <h2 className='font-bold text-white text-xl'>Verify your information</h2>
                <p className='mt-2'>
                    You will need to enter your legal name, date of birth and some other identitfy information
                </p>
            </div>

            <div className='mt-4'>
                <button className='btn bg-white text-black  font-body rounded-lg '>Get Started</button>
            </div>



        </div>
    </div>

    <div className='border rounded-lg p-8 space-x-2 hover:bg-gray-200'>
    <div className="badge  badge-lg !bg-gray-200 text-black font-bold !text-1xl ">2</div>
        <button>Add bank account</button>
    </div>


    <div className='my-5 '>
        <Button className='!bg-white border text-black   flex items-center gap-4 !hover:bg-gray-200'>
            <FaArrowLeft/> Go back
        </Button>
    </div>

    <div className='p-8 rounded-lg bg-green-50 text-center'>
        <span>Tutorial guide</span>

    </div>





    </>
  )
}

export default TransfersScreen