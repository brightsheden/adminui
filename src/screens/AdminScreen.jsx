
import { Link, Outlet, useNavigate } from "react-router-dom"
import {FaDonate, FaEnvelope, FaFacebookMessenger, FaHome, FaMoneyBill, FaPiggyBank} from 'react-icons/fa'
import Footer from "../components/Footer"


function AdminDashboardScreen() {

  return (
    <div>

<div className="grid min-h-screen w-full lg:grid-cols-[280px_1fr]">
  <div className="hidden border-r bg-white lg:block dark:bg-gray-800/40">
    <div className="flex h-full max-h-screen flex-col gap-2">
      <div className="flex h-[60px] items-center border-b px-6">
        <Link className="flex items-center gap-2 font-semibold" href="#">
        <div className="avatar">
                          <div className="w-10 rounded-full">
                            <img src="https://img.freepik.com/free-photo/handsome-man-smiling-happy-face-portrait-close-up_53876-139608.jpg?t=st=1709759197~exp=1709762797~hmac=f0113cfbf7f16677c33edf6c3af65a1c59dc15dd3aa065111f7a488ae66668a4&w=740" />
                          </div>
                        </div>
          <span className="">Dashboard</span>
        </Link>
        <button className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground ml-auto h-8 w-8">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-4 w-4"
          >
            <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"></path>
            <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"></path>
          </svg>
          <span className="sr-only">Toggle notifications</span>
        </button>
      </div>
      <div className="flex-1 overflow-auto py-2">
        <nav className="grid items-start px-4 text-sm font-medium">
          <Link
            className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:bg-gray-200 hover:rounded-lg dark:text-gray-400 dark:hover:text-gray-50"
            to="/admin"
          >


           <FaHome className="bg-gray-200 p-2 text-4xl rounded-full hover:bg-green-50 hover:text-green-500"/>


                Dashboard
          </Link>

          <Link to={'/admin/list'}
            className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:bg-gray-200 hover:rounded-lg dark:text-gray-400 dark:hover:text-gray-50"
       
          >


                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 bg-gray-200 p-2 text-4xl rounded-full hover:bg-green-50 hover:text-green-500">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 6.878V6a2.25 2.25 0 0 1 2.25-2.25h7.5A2.25 2.25 0 0 1 18 6v.878m-12 0c.235-.083.487-.128.75-.128h10.5c.263 0 .515.045.75.128m-12 0A2.25 2.25 0 0 0 4.5 9v.878m13.5-3A2.25 2.25 0 0 1 19.5 9v.878m0 0a2.246 2.246 0 0 0-.75-.128H5.25c-.263 0-.515.045-.75.128m15 0A2.25 2.25 0 0 1 21 12v6a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 18v-6c0-.98.626-1.813 1.5-2.122" />
                  </svg>


                Lists
          </Link>

          <Link to={'/admin/sasframe'}
            className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:bg-gray-200 hover:rounded-lg dark:text-gray-400 dark:hover:text-gray-50"
       
          >


                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 bg-gray-200 p-2 text-4xl rounded-full hover:bg-green-50 hover:text-green-500">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 6.878V6a2.25 2.25 0 0 1 2.25-2.25h7.5A2.25 2.25 0 0 1 18 6v.878m-12 0c.235-.083.487-.128.75-.128h10.5c.263 0 .515.045.75.128m-12 0A2.25 2.25 0 0 0 4.5 9v.878m13.5-3A2.25 2.25 0 0 1 19.5 9v.878m0 0a2.246 2.246 0 0 0-.75-.128H5.25c-.263 0-.515.045-.75.128m15 0A2.25 2.25 0 0 1 21 12v6a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 18v-6c0-.98.626-1.813 1.5-2.122" />
                  </svg>


                List 2
          </Link>


          <Link to={'/admin/contacts'}
            className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:bg-gray-200 hover:rounded-lg dark:text-gray-400 dark:hover:text-gray-50"
       
          >


                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 bg-gray-200 p-2 text-4xl rounded-full hover:bg-green-50 hover:text-green-500">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z" />
                        </svg>


                Contacts
          </Link>


          <Link to={'/admin/pricing'}
            className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:bg-gray-200 hover:rounded-lg dark:text-gray-400 dark:hover:text-gray-50"
       
          >


<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 bg-gray-200 p-2 text-4xl rounded-full hover:bg-green-50 hover:text-green-500">
  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5Z" />
</svg>



                Pricing
          </Link>



          <Link to={'/admin/transfers'}
            className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:bg-gray-200 hover:rounded-lg dark:text-gray-400 dark:hover:text-gray-50"
            
          >


           <FaMoneyBill className="bg-gray-200 p-2 text-4xl rounded-full"/>


                Transfers
          </Link>

          <Link
            className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:bg-gray-200 hover:rounded-lg dark:text-gray-400 dark:hover:text-gray-50"
            to="#"
          >


           <FaEnvelope className="bg-gray-200 p-2 text-4xl rounded-full"/>


                Updates
          </Link>

          <Link to={''}  className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:bg-gray-200 hover:rounded-lg dark:text-gray-400 dark:hover:text-gray-50" >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 bg-gray-200 p-2 text-4xl rounded-full hover:bg-green-50 hover:text-green-500">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                        </svg>



                            Integrate
                        </Link>


                        <Link to={''}  className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:bg-gray-200 hover:rounded-lg dark:text-gray-400 dark:hover:text-gray-50" >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 bg-gray-200 p-2 text-4xl rounded-full hover:bg-green-50 hover:text-green-500">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z" />
                        </svg>



                            Teams
                        </Link>


                        <li  className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:bg-gray-200 hover:rounded-lg dark:text-gray-400 dark:hover:text-gray-50">
                        <div><FaEnvelope className='text-4xl p-2 rounded-full bg-gray-200'/></div>
                        <div className='flex flex-col'>

                            <span className='text-sm text-gray-500'>Email Credit</span>
                        </div>
                    </li>

                    
                    <Link  className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:bg-gray-200 hover:rounded-lg dark:text-gray-400 dark:hover:text-gray-50">
                        <div> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 bg-gray-200 p-2 text-4xl rounded-full hover:bg-green-50 hover:text-green-500">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z" />
                        </svg>
                        </div>
                        <div className='flex flex-col'>
                           
                            <span className='text-sm text-gray-500'>Phone credits</span>
                        </div>
                    </Link>





          

          








          {/* Add similar anchor elements for other navigation items */}
        </nav>
      </div>
    </div>
  </div>
  <div className="flex flex-col">
   
    <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-6">
 
  {/* content */}
  <div className="">
    <Outlet/>
   

      
  
  </div>
</main>

  </div>
</div>

<Footer/>



    </div>
  )
}

export default AdminDashboardScreen