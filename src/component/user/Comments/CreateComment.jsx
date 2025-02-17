import { faPaperPlane } from '@fortawesome/free-regular-svg-icons'
import style from './style.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useContext, useState } from 'react'
import { UserContext } from '../userContext/UserContext';
import Stars from '../../../page/user/product/Stars';
import {  Form } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useLocation } from 'react-router-dom';

export default function CreateComment({setNewComment}) {
    const {userImage,user}=useContext(UserContext);
    const [star,setStar]=useState(1);
    const [loading,setLoading]=useState(false)
    const {pathname}=useLocation();
    const id=pathname.split('/')[3];
    console.log(id)
    const{register,handleSubmit,reset}= useForm();
    const comment=async (info)=>{
      setLoading(true);
      let tId=toast.loading("Comminting . . . ");
      try{
        const {data}=await axios.post(`https://ecommerce-node4.onrender.com/products/${id}/review`,
          {
              comment:info.comment,
              rating:star
          },{
            headers:{
              Authorization:`Tariq__${localStorage.getItem('token')}`
            }
          })
          toast.success("Comment Posted !");
          console.log(data);
          data.review.createdBy={
            role:'User',
            status:"Active",
            userName:user.userName
          }
          
          setNewComment(prev=>prev.push(data.review))
      }
      catch(e){

        toast.error(e.message);
      }
      finally{
        setLoading(false);
        toast.dismiss(tId);
        reset(); 
          setStar(1);
      }
    }
  return (
    
    <Form className={style.commentContainer} onSubmit={handleSubmit(comment)} >
       
      
       <div className={style.profile}>
        <img src={userImage} className={style.userImage} alt="" />
        <p className={style.userName}>{user?user.userName:"loading. ."}</p>
        
       </div>
       <div className={style.starHolder}>
              <Stars type={""} setReturn={setStar} number={1} />
         </div>
         <Form.Floating className="mb-3">
                <Form.Control 
                    as="textarea"
                    className={style.input} 
                    type="text" 
                    placeholder="Your Comment "
                    required 
                    {...register('comment')}
                />
                <Form.Label>Your Comment </Form.Label>
            </Form.Floating>

      <button disabled={loading} className={style.btn}  type='submit'>Comment {'  '} <FontAwesomeIcon icon={faPaperPlane} /></button>
    </Form>
  )
}
