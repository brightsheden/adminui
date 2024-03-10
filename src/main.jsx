import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import AdminDashboardScreen from './screens/AdminScreen.jsx';
import TransfersScreen from './screens/TransfersScreen.jsx';
import SasFrameScreen from './screens/SassFrameScreen.jsx';
import ListScreen from './screens/ListScreen.jsx';
import PricingScreen from './screens/PricingScreen.jsx';
import ContactScreen from './screens/ContactScreen.jsx';


const router = createBrowserRouter([
  {
    path: "/admin",
    element: <AdminDashboardScreen/>,
    children:[
      {
        path: "/admin/transfers",
        element: <TransfersScreen/>,
        
      },

      {
        path: "/admin/sasframe",
        element: <SasFrameScreen/>,
        
      },

      {
        path: "/admin/list",
        element: <ListScreen/>,
        
      },

      {
        path: "/admin/pricing",
        element: <PricingScreen/>,
        
      },
      

      {
        path: "/admin/contacts",
        element: <ContactScreen/>,
        
      },
      
      
      
    ]
  },

  {
    path:"/sasframe",
    element:<SasFrameScreen/>
  }
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)
