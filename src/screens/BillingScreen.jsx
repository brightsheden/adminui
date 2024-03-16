import { Button } from '@material-tailwind/react'
import React from 'react'

function BillingScreen() {
  return (
    <div>
        {/* headern */}
        <div className=''>
            <h2 className='font-bold text-xl my-4 overflow-clip'>Billing Address</h2>
            <div className='hidden md:block w-1/2'>
            <div role="tablist" className="tabs tabs-bordered text-xs ">
            <a role="tab" className="tab hover:tab-active sm:text-sm  w-40 ">Over View</a>
            <a role="tab" className="tab hover:tab-active  w-40">Payment Methods</a>
            <a role="tab" className="tab hover:tab-active w-40">Billing History</a>
            <a role="tab" className="tab hover:tab-active w-40">Preference</a>
            </div>
                
            </div>

        </div>

        <div className='my-4'>
            <h2 className='font-bold text-xl my-4'>Free trial</h2>

            <div className='font-bold text-base flex items-center gap-4'>
                
                <span>
                Credit remainng
                </span> <span><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
  <path strokeLinecap="round" strokeLinejoin="round" d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z" />
</svg>
</span>
            
            </div>

            <h2 className='text-3xl font-semibold leading-relaxed'>$4.99</h2>
            <div className='flex items-center gap-4'>
                <Button className='bg-purple-200 text-white p-3 !text-xs md:text-base'> Add payment details</Button>
                <Button className='bg-gray-200 p-3 text-black  !text-xs md:text-base '>View usage</Button>
            </div>


            <div className='flex items-center gap-2 text-xs my-5'>
                <span>  </span> <span><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
  <path strokeLinecap="round" strokeLinejoin="round" d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z" />
</svg> </span>
            <p><span className='font-bold'>Note</span> This does not reflect the status</p>
            </div>
           


        </div>

        <div  className='grid grid-cols-1 md:grid-cols-2 gap-4 '>
            <div  className='flex items-center gap-4'>
                <div>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12 rounded-md bg-green-500 p-4 text-white">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5Z" />
                    </svg>

                </div>
                <div>
                    <h2 className='font-bold'>Payment Methods</h2>
                    <span className='text-sm text-grey-200'>Add or Change payment methid</span>
                </div>
            </div>

            <div  className='flex items-center gap-4'>
                <div>
               

                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12 rounded-md bg-purple-400 p-4 text-white">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.325.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 0 1 1.37.49l1.296 2.247a1.125 1.125 0 0 1-.26 1.431l-1.003.827c-.293.241-.438.613-.43.992a7.723 7.723 0 0 1 0 .255c-.008.378.137.75.43.991l1.004.827c.424.35.534.955.26 1.43l-1.298 2.247a1.125 1.125 0 0 1-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.47 6.47 0 0 1-.22.128c-.331.183-.581.495-.644.869l-.213 1.281c-.09.543-.56.94-1.11.94h-2.594c-.55 0-1.019-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 0 1-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 0 1-1.369-.49l-1.297-2.247a1.125 1.125 0 0 1 .26-1.431l1.004-.827c.292-.24.437-.613.43-.991a6.932 6.932 0 0 1 0-.255c.007-.38-.138-.751-.43-.992l-1.004-.827a1.125 1.125 0 0 1-.26-1.43l1.297-2.247a1.125 1.125 0 0 1 1.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.086.22-.128.332-.183.582-.495.644-.869l.214-1.28Z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                        </svg>


                </div>
                <div>
                    <h2 className='font-bold'>Prefernces</h2>
                    <span className='text-sm text-grey-200'>Manage billing informations</span>
                </div>
            </div>

            
            <div  className='flex items-center gap-4'>
                <div>
               

                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12 rounded-md bg-orange-500 p-4 text-white">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z" />
                </svg>



                </div>
                <div>
                    <h2 className='font-bold'>Pricing</h2>
                    <span className='text-sm text-grey-200'>View pricing and FAQS</span>
                </div>
            </div>

             
            <div  className='flex items-center gap-4'>
                <div>
               

                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12 rounded-md bg-purple-400 p-4 text-white">
  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
</svg>




                </div>
                <div>
                    <h2 className='font-bold'>Billing History</h2>
                    <span className='text-sm text-grey-200'>View past and current invoice</span>
                </div>
            </div>
          
            <div  className='flex items-center gap-4'>
                <div>
               

            
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12 rounded-md bg-red-500 p-4 text-white">
  <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75" />
</svg>


                </div>
                <div>
                    <h2 className='font-bold'>Usage limmits</h2>
                    <span className='text-sm text-grey-200'>Set most recently monthly limmits</span>
                </div>
            </div>

            



        </div>



    </div>
  )
}

export default BillingScreen