import logo from './logo.svg';
import './App.css';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Index from './page/Index';

import Product from './page/product/Product';
import Home from './page/Home/Home';
import Cart from './page/product/Cart';
import Loginindex from './page/auth/Loginindex';
import Profile from './page/auth/Profile';
import CheckOut from './page/product/CheckOut';
import Singleproduct from './page/product/Singleproduct';

function App() {
  const router = createBrowserRouter([
    {
      path:'/',
      element:<Index/>,
  
      children:[{
        path:'/',
        element:<Home/>
      },
       {
        path:'/product',
        element:<Product/>
      } ,
      {
        path:'/product/:slug',
        element:<Singleproduct/>
      } ,
      {
        path:'/cart',
        element:<Cart/> 
      },
      {
        path:'/checkout',
        element:<CheckOut/> 
      },
      {
        path:'/login',
        element:<Loginindex value="login"/>
      },
      {
        path:'/register',
        element:<Loginindex value="register"/>
      },
      {
        path:'/profile',
        element:<Profile/>
      }
      ]
    },
  ])
  return (
   <>
   <RouterProvider router={router}/>
   </>
  );
}

export default App;
