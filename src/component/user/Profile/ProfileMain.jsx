import  { useContext } from 'react'
import { UserContext } from '../userContext/UserContext'
import Loading from '../loading/Loading';
import style from './main.module.css'
export default function ProfileMain() {
    const {user,userImage}=useContext(UserContext);
  return (
    <div className={style.container}>
        {user?<div className={style.userContainer} >
            <div className={style.imgCont}>
            <img className={style.img} src={userImage} alt="" />
            <div className={style.info}>
            
            <p className={style.status}> <span></span> {user.status}</p>
            <p className={style.role}>
              <span></span>{user.role}
              </p>  
            </div>
            </div>
            <h2>{user.userName}</h2>
            
            <p className={style.email}><span>Email:</span> {user.email}</p>
            
        </div>:<Loading/>}
      
    </div>
  )
}
