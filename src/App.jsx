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
import SendCode from "./page/auth/sendcode/SendCode";
import Protected from "./component/user/protected/Protected";
import CartContextProvider from "./component/user/Cart/CartContext/CartContext";
import UserContextProvider from "./component/user/userContext/UserContext";
import ProfileMain from "./component/user/Profile/ProfileMain";
import Edit from "./page/user/profile/edit/Edit";
import PlaceOrder from "./page/user/PlaceOrder/PlaceOrder";
import Orders from "./page/user/orders/Orders";
import ProductsContextProvider from "./component/user/ProductsContext/ProductsContext";
import ProductWithCat from "./page/user/ProductWithCat/ProductWithCat";
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
        },{
          path:'forget',
          element:<SendCode/>
        }
      ]
    },
    {
      path:'/user',
      element:
      <Protected>
        <ProductsContextProvider>
        <UserContextProvider>
       <CartContextProvider>
       <UserLayout/>
       </CartContextProvider>
       </UserContextProvider>
       </ProductsContextProvider>
        </Protected>
        ,
      children:[
        {
          path:'/user/cart/placeorder',
          element:<PlaceOrder/>
        },
        {
          index:true,
          element:
          <Protected>
            <Home/>
            </Protected>
        },
       
        {
          path:'home',
          element:<Protected>
          <Home/>
    </Protected>
        },
        {
          path:'about',
          element: <Protected><About/></Protected>
        },
        {
          path:'contact',
          element:<Protected><Contact/></Protected>
        },
        {
          path:'profile',
          element:<Protected><Profile/></Protected>
        },{
        path:'products',
        element:<Protected><Products/></Protected>,
        },
        {
          path:'cart',
          element:<Protected>
            
            <Cart/>
           
            </Protected>
        },
        {
          path:'category/:catId',
          element:<Protected><ProductWithCat/></Protected>
        },
          {
            path:'product/:id',
            element:<Protected><Product/></Protected>
          },
          {
            path:'profile',
            element:<Protected>
              
              <Profile/>
              
              </Protected>,
            children:[
              {
                index:true,
                element:<Protected> <ProfileMain/></Protected>
              },
              {
                path:'edit',
                element:<Protected>
                  <Edit/>
                </Protected>
              },{
                path:'main',
                element:<Protected>
                  <ProfileMain/>
                </Protected>
              },{
                path:'orders',
                element:<Protected>
                  <Orders/>
                </Protected>
              }
            ]
          }
        
      ]
    }
  ]);

  return (
    <div className="">
      <ToastContainer
position="top-left"
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
