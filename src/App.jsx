import { createBrowserRouter, RouterProvider } from "react-router-dom"
import AuthLayout from "./Layouts/auth/AuthLayout";
import UserLayout from "./Layouts/user/UserLayout";
import Login from "./page/auth/login/Login";
import Signup from "./page/auth/signup/Signup";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Bounce, ToastContainer } from "react-toastify";

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
      element:<UserLayout/>

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
