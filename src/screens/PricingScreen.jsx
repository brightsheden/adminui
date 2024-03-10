import { Button } from "@material-tailwind/react"


export default function PricingScreen() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div className="border border-gray-200 rounded-lg overflow-hidden">
        <div className="bg-gray-50 p-6 dark:bg-gray-800">
          <h3 className="font-bold text-2xl">Starter</h3>
          <p className="text-gray-500">For individuals just getting started</p>
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

          <Button className=" rounded-full text-white  bg-purple-300 w-full">Select</Button>

          </div>
       
        </div>
      </div>


      <div className="border border-gray-200 rounded-lg overflow-hidden">
        <div className="bg-gray-50 p-6 dark:bg-gray-800">
          <h3 className="font-bold text-2xl">Pro</h3>
          <p className="text-gray-500">For professional developers</p>
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
        <div className="bg-gray-50 p-6 flex items-center justify-between gap-4 text-sm dark:bg-gray-800">
          <div className="flex flex-col">
            <h4 className="font-semibold">$$</h4>
            <p className="text-xs text-gray-500">Unlimited everything</p>
          </div>
          <Button size="sm">Select</Button>
        </div>
      </div>


      <div className="border border-gray-200 rounded-lg overflow-hidden">
        <div className="bg-gray-50 p-6 dark:bg-gray-800">
          <h3 className="font-bold text-2xl">Enterprise</h3>
          <p className="text-gray-500">For large teams and organizations</p>
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
        <div className="bg-gray-50 p-6 flex items-center justify-between gap-4 text-sm dark:bg-gray-800">
          <div className="flex flex-col">
            <h4 className="font-semibold">Contact us</h4>
            <p className="text-xs text-gray-500">Custom pricing and features</p>
          </div>
          <Button size="sm">Contact</Button>
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
