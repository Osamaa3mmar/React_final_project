import { createBrowserRouter, RouterProvider } from "react-router-dom"
import AuthLayout from "./Layouts/auth/AuthLayout";
import UserLayout from "./Layouts/user/UserLayout";
import Login from "./page/auth/login/Login";
import Signup from "./page/auth/signup/Signup";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Bounce, ToastContainer } from "react-toastify";
import Home from "./page/user/Home/Home";
import About from "./page/user/about/About";
import Contact from "./page/user/contact/Contact";
import Profile from "./page/user/profile/Profile";
import Products from "./page/user/products/Products";
import Cart from './page/user/cart/Cart';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import Product from "./page/user/product/Product";
export default function App() {

  const router =createBrowserRouter([
    {
      path:'/',
      element:<AuthLayout/>,
      children:[
        {
          index:true,
          element:<Login/>
        },
        {
          path:'login',
          element:<Login/>
        },
        {
          path:'signup',
          element:<Signup/>
        }
      ]
    },
    {
      path:'/user',
      element:<UserLayout/>,
      children:[
        {
          index:true,
          element:<Home/>
        },
       
        {
          path:'home',
          element:<Home/>
        },
        {
          path:'about',
          element:<About/>
        },
        {
          path:'contact',
          element:<Contact/>
        },
        {
          path:'profile',
          element:<Profile/>
        },{
        path:'products',
        element:<Products/>,
        },
        {
          path:'cart',
          element:<Cart/>
        },
        {
          path:'category/:catId',
          element:<div>here</div>
        },
          {
            path:'product/:id',
            element:<Product/>
          }
        
      ]
    }
  ]);

  return (
    <div className="">
      <ToastContainer
position="top-right"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick={false}
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="dark"
transition={Bounce}
/>
      <RouterProvider router={router}/>
    </div>
  )
}
