import React from 'react'

function ProspectCard() {
  return (
    <div className='border rounded-lg shadow-sm p-2 m-2 w-full'>
    <div className="alert !p-1 !md:p-2 bg-purple-50 flex flex-row text-xs  !shadow-none  font-bold">
      
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
    <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
  </svg>

      <span>Finished 15m.</span>
    </div>

    <div className='text-center'>
      <div>
      <h2 className='font-bold text-xl md:text-2xl'>Prospects</h2>
      </div>
     

      <div className='flex flex-col justify-center my-2 md:my-8'>
        <span className='text-base md:text-xl'>valid</span>
        <span className='font-bold text-xl md:text-4xl leading-7'>1</span>
      </div>

    </div>

    <div className='p-4'>
      {/*items*/}
      <ul className='space-y-4'>
        <li className='flex  justify-between p-2  items-center rounded-full border-2 hover:bg-gray-100'>
          <div className='flex items-center gap-1'>
            <span>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-purple-200">
          <path strokeLinecap="round" strokeLinejoin="round" d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z" />
        </svg>

            </span>
          

        <span>Valid</span>

          </div>
          <div className='flex gap-4 items-center'> 
            <span>1</span>
            <span className='bg-gray-200 font-medium rounded-full p-2'>100%</span>
            <span>
              <button className=' !bg-none !border-none !shadow-none text-base'>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
            </svg>

              </button>
            </span>
          </div>
        </li>
        <li className='flex  justify-between p-2  items-center rounded-full border-2 hover:bg-gray-100'>
          <div className='flex items-center gap-1'>
            <span>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-purple-200">
          <path strokeLinecap="round" strokeLinejoin="round" d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z" />
        </svg>

            </span>
          

        <span>Valid</span>

          </div>
          <div className='flex gap-4 items-center'> 
            <span>1</span>
            <span className='bg-gray-200 font-medium rounded-full p-2'>100%</span>
            <span>
              <button className=' !bg-none !border-none !shadow-none text-base'>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
            </svg>

              </button>
            </span>
          </div>
        </li>

        <li className='flex  justify-between p-2  items-center rounded-full border-2 hover:bg-gray-100'>
          <div className='flex items-center gap-1'>
            <span>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-purple-200">
          <path strokeLinecap="round" strokeLinejoin="round" d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z" />
        </svg>

            </span>
          

        <span>Valid</span>

          </div>
          <div className='flex gap-4 items-center'> 
            <span>1</span>
            <span className='bg-gray-200 font-medium rounded-full p-2'>100%</span>
            <span>
              <button className=' !bg-none !border-none !shadow-none text-base'>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
            </svg>

              </button>
            </span>
          </div>
        </li>

        <li className='flex  justify-between p-2  items-center rounded-full border-2 hover:bg-gray-100'>
          <div className='flex items-center gap-1'>
            <span>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-purple-200">
          <path strokeLinecap="round" strokeLinejoin="round" d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z" />
        </svg>

            </span>
          

        <span>Valid</span>

          </div>
          <div className='flex gap-4 items-center'> 
            <span>1</span>
            <span className='bg-gray-200 font-medium rounded-full p-2'>100%</span>
            <span>
              <button className=' !bg-none !border-none !shadow-none text-base'>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
            </svg>

              </button>
            </span>
          </div>
        </li>
      </ul>

    </div>

  </div>
  )
}

export default ProspectCard