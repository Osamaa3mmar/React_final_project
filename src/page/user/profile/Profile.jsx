import CustomSideBar from "./CustomSideBar";
import { Outlet } from "react-router-dom";
import style from './profile.module.css'
export default function Profile() {
  return (
    <div className={style.container}>
    <CustomSideBar/>
    <Outlet/>
    </div>
  )
}
