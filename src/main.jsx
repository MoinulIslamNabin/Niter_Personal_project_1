import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Components/Home/Home';
import ErrorPage from './Components/ErrorPage/ErrorPage';
import MainLayOut from './Components/MainLayOut/MainLayOut';
import Routine from './Components/Home/Routine/Routine';
import Docs from './Components/Home/Docs/Docs';


const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayOut />, // Main layout wraps Home and Docs
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/", // Home route
        element: <Home />
      }
    ]
  },

]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
