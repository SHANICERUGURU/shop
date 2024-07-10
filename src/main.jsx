import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import ProductsContainer from './components/productscontainer.jsx';
import ProductProfile from './components/productprofile.jsx';

const router=createBrowserRouter([
  {
    path:'/',
    element:<ProductsContainer/>,
    },
    {
      path:'/catalogue',
      element:<ProductsContainer/>,
      },
      {
        path:'/productprofile',
        element:<ProductProfile/>,
        },
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router}/>
  </React.StrictMode>,
)
