import { createBrowserRouter } from "react-router-dom";

import Login from "../Pages/login/Login";
import Signup from "../Pages/signup/Signup";


import Dashboard from "../Pages/Dashboard/Dashboard";
import DashboardLayout from "../Layouts/DashboardLayout/DashboardLayout";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <DashboardLayout/>,
      children: [
        {
          path: "/",
          element: <Dashboard />,
          // loader: () => fetch("http://localhost:3000/house"),
        },
       
        {
          path: "/signup",
          element: <Signup />,
        },
        {
          path: "/login",
          element: <Login />,
        },
  
       
       
      ],
    },
  ]);