
import { Link, Outlet, useNavigate } from "react-router-dom"
import {FaDonate, FaFacebookMessenger, FaHome, FaMoneyBill, FaPiggyBank} from 'react-icons/fa'
import Footer from "../components/Footer"


function AdminDashboardScreen() {

  return (
    <div>

<div className="grid min-h-screen w-full lg:grid-cols-[280px_1fr]">
  <div className="hidden border-r bg-white lg:block dark:bg-gray-800/40">
    <div className="flex h-full max-h-screen flex-col gap-2">
      <div className="flex h-[60px] items-center border-b px-6">
        <a className="flex items-center gap-2 font-semibold" href="#">
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
            className="h-6 w-6"
          >
            <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
            <circle cx="12" cy="7" r="4"></circle>
          </svg>
          <span className="">Dashboard</span>
        </a>
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
            className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
            to="#"
          >


           <FaHome className="bg-gray-200 p-2 text-4xl rounded-full hover:bg-green-50 hover:text-green-500"/>


                Dashboard
          </Link>

          <Link
            className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
            to="#"
          >


           <FaDonate className="bg-gray-200 p-2 text-4xl rounded-full"/>


                Donations
          </Link>

          <Link
            className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
            to="#"
          >


           <FaMoneyBill className="bg-gray-200 p-2 text-4xl rounded-full"/>


                Transfers
          </Link>

          <Link
            className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
            to="#"
          >


           <FaFacebookMessenger className="bg-gray-200 p-2 text-4xl rounded-full"/>


                Updates
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