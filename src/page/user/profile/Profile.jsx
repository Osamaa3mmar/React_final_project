import { useContext } from "react"
import { UserContext } from "../../../component/user/userContext/UserContext"
import CustomSideBar from "./CustomSideBar";
import { Outlet } from "react-router-dom";
import style from './profile.module.css'
export default function Profile() {
  const {user}=useContext(UserContext);
  return (
    <div className={style.container}>
    <CustomSideBar/>
    <Outlet/>
    </div>
  )
}
