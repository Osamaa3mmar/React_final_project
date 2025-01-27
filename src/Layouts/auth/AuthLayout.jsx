import { Outlet } from "react-router-dom";
import NavbarAuth from "../../component/auth/navbar/NavbarAuth";
import Footer from "../../component/user/footer/Footer";

export default function AuthLayout() {
  return (
    <div>
      
      <Outlet/>
      
    </div>
  )
}
