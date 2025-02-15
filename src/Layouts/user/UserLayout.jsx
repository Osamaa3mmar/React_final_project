import { Outlet, useLocation } from 'react-router-dom'
import Footer from '../../component/user/footer/Footer.jsx'
import MyNavbar from '../../component/user/navbar/Navbar.jsx'
import Protected from '../../component/user/protected/Protected.jsx'
import Tracker from '../../component/user/Tracker/Tracker.jsx'
export default function UserLayout() {
  const {pathname}=useLocation();
  const path=pathname.split('/');
  return (
    <div>
      <MyNavbar/>
      <Tracker path={path}/>
      <Outlet/>
      
      <Footer/>
    </div>
  )
}
