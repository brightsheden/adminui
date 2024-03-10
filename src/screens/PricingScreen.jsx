import { Button, Typography } from "@material-tailwind/react"
import { useState } from "react"
import PricingTable from "../components/PricingTable"
import PricingFaq from "../components/PricingFaq"
import { Link } from "react-router-dom"


export default function PricingScreen() {
  const [year, setYer] = useState(false)
  const [month, setMonth] = useState(false)
  
  const handleYear = ()  =>{
    setYer(!year)
    setMonth(false)
  }

  const handleMonth = ()  =>{
    setMonth(!month)
    setYer(false)
  }
  
  return (

    <div>

      <div className="flex justify-center my-16 ">
        <button className="btn p-2 font-semibold rounded-full bg-purple-500 w-64 text-white" onClick={handleMonth}>Monthly</button>
        <button className="btn p-2 font-semibold rounded-full bg-purple-500 w-64 text-white relative" onClick={handleYear}>Yearly
        
       </button>
      </div>

      {year && (<p>year price</p>)}
      {month && (<p>month price</p>)}



<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div className="border border-gray-200 rounded-lg overflow-hidden">
        <div className="bg-gray-50 p-6 dark:bg-gray-800">
          <h3 className="font-bold text-2xl">Starter</h3>
          <p className="text-gray-500">For individuals just getting started</p>
        </div>
        <div className="p-4 bg-purple-200 rounded-full text-white text-center mx-2">
          start for free
        </div>
        <div className="p-6 grid gap-4">
          <div className="flex items-center gap-4">
            <CheckIcon className="w-4 h-4 fill-primary" />
            <span className="text-sm font-medium">Unlimited public projects</span>
          </div>
          <div className="flex items-center gap-4">
            <CheckIcon className="w-4 h-4 fill-primary" />
            <span className="text-sm font-medium">Unlimited collaborators</span>
          </div>
          <div className="flex items-center gap-4">
            <XIcon className="w-4 h-4 fill-gray-300" />
            <span className="text-sm font-medium">Community support</span>
          </div>
        </div>
        <div className="bg-gray-50 p-6 flex-col space-y-4 items-center justify-between gap-4 text-sm dark:bg-gray-800">
          <div className="flex flex-col">
            <h4 className="font-bold text-4xl">$50</h4>
            <p className="text-xs text-gray-500">Up to 3 active projects</p>
          </div>

          <div className="!w-full">

          <Button className=" rounded-full text-white  bg-purple-300 w-full !text-2xl">Start Free trial</Button>

          </div>
       
        </div>
      </div>


      <div className="border border-gray-200 rounded-lg overflow-hidden">
        <div className="bg-gray-50 p-6 dark:bg-gray-800">
          <h3 className="font-bold text-2xl">Pro</h3>
          <p className="text-gray-500">For professional developers</p>
        </div>

        <div className="p-4 bg-purple-200 rounded-full text-white text-center mx-2">
          Get 60% off
        </div>
        <div className="p-6 grid gap-4">
          <div className="flex items-center gap-4">
            <CheckIcon className="w-4 h-4 fill-primary" />
            <span className="text-sm font-medium">Unlimited public projects</span>
          </div>
          <div className="flex items-center gap-4">
            <CheckIcon className="w-4 h-4 fill-primary" />
            <span className="text-sm font-medium">Unlimited collaborators</span>
          </div>
          <div className="flex items-center gap-4">
            <CheckIcon className="w-4 h-4 fill-primary" />
            <span className="text-sm font-medium">Community support</span>
          </div>
        </div>
        <div className="bg-gray-50 p-6 flex-col space-y-4 items-center justify-between gap-4 text-sm dark:bg-gray-800">
          <div className="flex flex-col">
            <h4 className="font-bold text-4xl">$100</h4>
            <p className="text-xs text-gray-500">Up to 3 active projects</p>
          </div>

          <div className="!w-full">

          <Button className=" rounded-full text-white  bg-purple-300 w-full !text-2xl">Start Free trial</Button>

          </div>
       
        </div>
      </div>


      <div className="border border-gray-200 rounded-lg overflow-hidden ">
        <div className="bg-gray-50 p-6 dark:bg-gray-800">
          <h3 className="font-bold text-2xl">Enterprise</h3>
          <p className="text-gray-500">For large teams and organizations</p>
        </div>
        <div className="p-4 bg-purple-200 rounded-full text-white text-center mx-2">
          Get 60% off
        </div>
        <div className="p-6 grid gap-4">
          <div className="flex items-center gap-4">
            <CheckIcon className="w-4 h-4 fill-primary" />
            <span className="text-sm font-medium">Unlimited public projects</span>
          </div>
          <div className="flex items-center gap-4">
            <CheckIcon className="w-4 h-4 fill-primary" />
            <span className="text-sm font-medium">Unlimited collaborators</span>
          </div>
          <div className="flex items-center gap-4">
            <CheckIcon className="w-4 h-4 fill-primary" />
            <span className="text-sm font-medium">{`24/7 support with <3`}</span>
          </div>
        </div>
        <div className="bg-gray-50 p-6 flex-col space-y-4 items-center justify-between gap-4 text-sm dark:bg-gray-800">
          <div className="flex flex-col">
            <h4 className="font-bold text-4xl">$50</h4>
            <p className="text-xs text-gray-500">Up to 3 active projects</p>
          </div>

          <div className="!w-full">

          <Button className=" rounded-full text-white  bg-purple-300 w-full !text-2xl">Start Free trial</Button>

          </div>
       
        </div>
      </div>


    </div>

    <div>
      <PricingTable/>
       
    </div>

    <div className="flex justify-between">
      <div className="w-1/2">
        <h1 className="font-bold text-4xl">FAQ</h1>
        <p className="font-bold text-base !w-40 ">
          Still need any help <span className="text-purple-500 link">
            <Link >
            Contact us
            </Link>
           </span>
        </p>
      </div>
      <div>
        <PricingFaq/>
      </div>
    </div>

    </div>
   
  )
}

function CheckIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="20 6 9 17 4 12" />
    </svg>
  )
}


function XIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  )
}
