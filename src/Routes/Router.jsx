import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import Menu from "../Pages/Menu/Menu/Menu";
import Order from "../Pages/Order/Order/Order";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import PrivateRoutes from "./PrivateRoutes";
import Secret from "../Pages/Shared/Secret/Secret";
import DashBoard from "../Layout/DashBoard";
import Cart from "../Pages/Dashboard/Cart";
import Error from "../Pages/Error/Error";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/menu",
        element: <Menu />,
      },
      {
        path: "/order/:category",
        element: <Order />,
      },
      {
        path:'/login',
        element:<Login/>
      },
      {
        path:'/signUp',
        element:<SignUp/>
      },{
        path:'/secret',
        element:<PrivateRoutes><Secret/></PrivateRoutes>
      }
    ],
  }
  ,

  {
    path:'dashboard',
    element:<DashBoard/>,
    children:[
      {
        path:'cart',
        element:<Cart/>
      }
    ]
  },

  {
path:'*',
element:<Error/>
  }
 
]);

export default router;
