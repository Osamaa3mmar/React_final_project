
import { useLocation } from 'react-router-dom'
import style from './track.module.css'
export default function Tracker({path}) {
   
  return (
    <div>
        {path[2]==='home'?'':
         <div className={`container ${style.cont}`}>

         {path?path.map((element,index)=>
       {
           return element===''||element.length>10?'':<div key={index}><p>{index==1?'':'/'} {element}</p></div>
       }):''}
       </div>
        }
   
    </div>
  )
}
