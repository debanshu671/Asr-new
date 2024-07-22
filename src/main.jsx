import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Home from './pages/Home.jsx';
import Servise from './pages/Servise.jsx';
import  Internship from './pages/Internship.jsx';
import Portfolio from './pages/Internship.jsx';
import Testimonial from './pages/Testimonials.jsx';
import Contact from './pages/Contact.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/servise",
    element: <Servise />,
  },
  {
    path: "/portfolios",
    element:<Portfolio />,
  },
  
 {
    path: "/internship",
    element: <Internship />,
  },
 
  {
    path: "/testimonial",
    element: <Testimonial />,
  },
  {
    path: "/contact",
    element: <Contact/>,
  }
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    
  </React.StrictMode>,
)
