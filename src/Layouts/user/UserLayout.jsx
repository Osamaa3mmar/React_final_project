import { Outlet } from 'react-router-dom'
import Footer from '../../component/user/footer/Footer.jsx'
import MyNavbar from '../../component/user/navbar/Navbar.jsx'
export default function UserLayout() {
  return (
    <div>
      <MyNavbar/>
      <Outlet/>
      <Footer/>
    </div>
  )
}
