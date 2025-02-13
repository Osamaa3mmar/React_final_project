import React, { useContext } from 'react'
import { UserContext } from '../userContext/UserContext'
import Loading from '../loading/Loading';
import style from './main.module.css'
export default function ProfileMain() {
    const {user}=useContext(UserContext);
    console.log(user)
  return (
    <div className={style.container}>
        {user?<div >
            <div className={style.imgCont}>
            <img className={style.img} src={user.image?user.image.secure_url:''}alt="" />
            </div>
            <h2>{user.userName}</h2>
            <p>{user.status}</p>
            <p>Email: {user.email}</p>
            
        </div>:<Loading/>}
      
    </div>
  )
}
