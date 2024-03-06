import React from 'react'
import Navbar from '../components/Navbar'
import { Button, IconButton, Menu, MenuHandler, MenuItem, MenuList,Input } from '@material-tailwind/react'
import { FaDownload, FaFilter, FaFolder, FaMagic, FaSearch } from 'react-icons/fa'
import ProspectCard from '../components/ProspectCard'
import { MessageButton } from '../components/MessageButton'


function SasFrameScreen() {
  return (
    <div>
      <Navbar/>

      <div className='container mx-auto my-5 border-b flex justify-between items-center py-4'>
      <div className='p-2 md:p-0 flex items-center gap-4 '>
        <div>
        <div className="avatar">
          <div className="w-10 rounded-full">
            <img src="https://img.freepik.com/free-photo/handsome-man-smiling-happy-face-portrait-close-up_53876-139608.jpg?t=st=1709759197~exp=1709762797~hmac=f0113cfbf7f16677c33edf6c3af65a1c59dc15dd3aa065111f7a488ae66668a4&w=740" />
          </div>
        </div>
        </div>
        <div>
          <h2 className='font-bold text-sm md:text-xl'>List 2</h2>
          <span className='text-xs w-40 md:w-full md:text-base text-gray-900'>Select segments to select or filter your contact list</span>
        </div>
      </div>

      <div className=''>
     
        <button  className='btn text-white !text-sm md:text-base !bg-purple-500'>Create list</button>
      </div>

      </div>

      <div className='container mx-auto my-5 border-b flex flex-col space-x-4 md:space-x-0  md:flex-row justify-between items-center py-4'>
        <div className='hidden md:flex gap-4 !text-xs'> 
          <div className='flex text-sm  items-center gap-4 p-2 border shadow-sm rounded-md'>
            <FaFolder/>
            <span className='text-gray-500'>Folder:</span>
            <span className='font-bold'>My List</span>

          </div>

          <button className='btn'> 
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
        </svg>

          </button>

          <button className='btn'>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125" />
        </svg>

          </button>

          <button className='btn'>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
        </svg>


          </button>

        </div>

        <div className='flex md:gap-4 items-center'>

            <div className='hidden md:block' >
            <Menu >
        <MenuHandler>
          <div className='!bg-white border shadow-sm flex items-center p-2 gap-2 rounded-md'>
            <span>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 3c2.755 0 5.455.232 8.083.678.533.09.917.556.917 1.096v1.044a2.25 2.25 0 0 1-.659 1.591l-5.432 5.432a2.25 2.25 0 0 0-.659 1.591v2.927a2.25 2.25 0 0 1-1.244 2.013L9.75 21v-6.568a2.25 2.25 0 0 0-.659-1.591L3.659 7.409A2.25 2.25 0 0 1 3 5.818V4.774c0-.54.384-1.006.917-1.096A48.32 48.32 0 0 1 12 3Z" />
          </svg>

          </span> 

          <span className='font-bold'>
            Owned by:
          </span>

          <span>Danny</span>
  
        </div>
      </MenuHandler>
      <MenuList>
        <MenuItem>Menu Item 1</MenuItem>
        <MenuItem>Menu Item 2</MenuItem>
        <MenuItem>Menu Item 3</MenuItem>
      </MenuList>
    </Menu>

          </div>

          <div className='w-full'>
          <div className="w-full">

          <Input label="Search list" icon={<FaSearch/>} />
        </div>

          </div>
        </div>


      </div >

      <div className='container mx-auto grid grid-cols-1 md:grid-cols-2 gap-4  '>
        <ProspectCard/>
        <ProspectCard/>
      
      </div>

      <MessageButton/>

      
    </div>
  )
}

export default SasFrameScreen