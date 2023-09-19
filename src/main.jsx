import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/Home/Home.jsx';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Users from './components/Users/Users';
import UserDetails from './components/UserDetails/UserDetails';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    children: [
     {
      path: '/about',
      element: <About></About>
     },
     {
      path: '/usears',
      loader: ()=> fetch('https://jsonplaceholder.typicode.com/users'),
      element:<Users></Users>
     },
     {
      path: '/contact',
      element: <Contact></Contact>
     },
     {
      path: '/user/:userId',
      loader:({params}) => console.log(params),
      element:<UserDetails></UserDetails>
     }
    ]
  },
  
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
