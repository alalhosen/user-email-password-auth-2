import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './componenta/Root/Root.jsx';
import Home from './componenta/Home/Home.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children:[
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/',
        element: <Login></Login>
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
       <RouterProvider router={router} />
  </StrictMode>,
)
