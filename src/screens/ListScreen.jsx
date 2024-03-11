import { Button, Input, Switch } from '@material-tailwind/react'
import React from 'react'
import { FaLink } from 'react-icons/fa'

function ListScreen() {
  return (
    <div className='p-2'>
        <form className='space-y-5'>
            <div>
                {/* header */}
                
                <div className='border-b-2'>
                    <div className='flex  items-center gap-4'>
                    <FaLink/>
                    <span className='font-semibold'>Menu Links</span>

                    </div>

                    <span className='text-grey-500'>
                        Set the link that will appear in ur right top.
                    </span>
                  
                </div>

                <div className='flex justify-around gap-4'>
                    {/* inputs*/}
                    <div className='w-full'>
                        <div className='my-2'><h2 className='font-bold'>Name</h2></div>
                        <div className='space-y-4 w-full'>
                            <Input label='link 1'/>
                            <Input label='link 2'/>
                            <Input label='link 3'/>
                            
                        </div>

                    </div>

                    <div className='w-full'>

                    <div className='my-2'><h2 className='font-bold'>URL Links</h2></div>
                        <div className='space-y-4'>
                            <Input/>
                            <Input/>
                            <Input/>
                            
                        </div>

                    </div>

                </div>

            </div>

            <div>
                {/* header */}
                <div className='border-b-2 mb-2 pb-2'>
                    <div className='flex  items-center gap-4'>
                    <FaLink/>
                    <span className='font-bold'>Footer Links</span>

                    </div>

                    <span className='text-grey-500 text-sm font-medium'>
                        Set the link that will appear in ur right top.
                    </span>
                  
                </div>

                <div className='flex justify-around gap-4'>
                    {/* inputs*/}
                    <div className='w-full'>
                        <div className='my-2'><h2 className='font-bold'>Name</h2></div>
                        <div className='space-y-4 w-full'>
                            <Input label='link 1'/>
                            <Input  label='link 2'/>
                            <Input  label='link 2'/>
                            
                        </div>

                    </div>

                    <div className='w-full'>

                    <div className='my-2'><h2 className='font-bold'>URL Links</h2></div>
                        <div className='space-y-4'>
                            <Input/>
                            <Input/>
                            <Input/>
                            
                        </div>

                    </div>

                </div>

            </div>


            <div>
                {/* header */}
                <div className='border-b-2 mb-2 pb-2'>
                    <div className='flex  items-center gap-4'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                    </svg>

                    <span className='font-semibold'>Support email</span>

                    </div>

                    <span className='text-grey-500'>
                        Set the link that will appear in ur right top.
                    </span>
                  
                </div>

                <div className='w-1/2'>
                    <span className='font-bold '>Support Email</span>

                    <Input 
                    className='mt-2'
                    
                    label='support@mail.com'
                    />
                </div>

            </div>


            <div className='bg-gray-100 shadow-lg rounded-lg  p-4'>
                {/* header */}
                <div className='flex justify-between items-center mb-2 pb-2'>
                    <div className='flex  items-center gap-4'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 0 0 1.5-.189m-1.5.189a6.01 6.01 0 0 1-1.5-.189m3.75 7.478a12.06 12.06 0 0 1-4.5 0m3.75 2.383a14.406 14.406 0 0 1-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 1 0-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
                    </svg>

                    <span className='font-semibold'>Show Suggested Articles</span>

                    </div>

                    <span className=''>
                    <Switch color="indigo" defaultChecked />
                    </span>
                  
                </div>

                <div className='w-full text-xs font-medium'>
                   Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate consequatur temporibus vel vitae autem ipsa qui quod pariatur eum provident, necessitatibus culpa mollitia. Laboriosam voluptatibus cupiditate aspernatur consequuntur tempore nostrum.
                </div>

            </div>

            <div className='bg-gray-100 shadow-lg rounded-lg  p-4'>
                {/* header */}
                <div className='flex justify-between items-center mb-2 pb-2'>
                    <div className='flex  items-center gap-4'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 0 1 .865-.501 48.172 48.172 0 0 0 3.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z" />
                    </svg>

                    <span className='font-semibold'>Show Contact us Button</span>

                    </div>

                    <span className=''>
                    <Switch color="indigo" defaultChecked />
                    </span>
                  
                </div>

                <div className='w-full text-xs font-medium'>
                   Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate consequatur temporibus vel vitae autem ipsa qui quod pariatur eum provident, necessitatibus culpa mollitia. Laboriosam voluptatibus cupiditate aspernatur consequuntur tempore nostrum.
                </div>

            </div>


            <div className='bg-gray-100 shadow-lg rounded-lg  p-4'>
                {/* header */}
                <div className='flex justify-between items-center mb-2 pb-2'>
                    <div className='flex  items-center gap-4'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.375 19.5h17.25m-17.25 0a1.125 1.125 0 0 1-1.125-1.125M3.375 19.5h7.5c.621 0 1.125-.504 1.125-1.125m-9.75 0V5.625m0 12.75v-1.5c0-.621.504-1.125 1.125-1.125m18.375 2.625V5.625m0 12.75c0 .621-.504 1.125-1.125 1.125m1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125m0 3.75h-7.5A1.125 1.125 0 0 1 12 18.375m9.75-12.75c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125m19.5 0v1.5c0 .621-.504 1.125-1.125 1.125M2.25 5.625v1.5c0 .621.504 1.125 1.125 1.125m0 0h17.25m-17.25 0h7.5c.621 0 1.125.504 1.125 1.125M3.375 8.25c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125m17.25-3.75h-7.5c-.621 0-1.125.504-1.125 1.125m8.625-1.125c.621 0 1.125.504 1.125 1.125v1.5c0 .621-.504 1.125-1.125 1.125m-17.25 0h7.5m-7.5 0c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125M12 10.875v-1.5m0 1.5c0 .621-.504 1.125-1.125 1.125M12 10.875c0 .621.504 1.125 1.125 1.125m-2.25 0c.621 0 1.125.504 1.125 1.125M13.125 12h7.5m-7.5 0c-.621 0-1.125.504-1.125 1.125M20.625 12c.621 0 1.125.504 1.125 1.125v1.5c0 .621-.504 1.125-1.125 1.125m-17.25 0h7.5M12 14.625v-1.5m0 1.5c0 .621-.504 1.125-1.125 1.125M12 14.625c0 .621.504 1.125 1.125 1.125m-2.25 0c.621 0 1.125.504 1.125 1.125m0 1.5v-1.5m0 0c0-.621.504-1.125 1.125-1.125m0 0h7.5" />
                    </svg>

                    <span className='font-semibold'>Show Table of content</span>

                    </div>

                    <span className=''>
                    <Switch color="indigo" defaultChecked />
                    </span>
                  
                </div>

                <div className='w-full text-xs font-medium'>
                   Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate consequatur temporibus vel vitae autem ipsa qui quod pariatur eum provident, necessitatibus culpa mollitia. Laboriosam voluptatibus cupiditate aspernatur consequuntur tempore nostrum.
                </div>

            </div>

            <div className='flex justify-end my-5'>
                <Button className=' !bg-purple-400'>Save settings</Button>
            </div>



            
















        </form>


    </div>
  )
}

export default ListScreen