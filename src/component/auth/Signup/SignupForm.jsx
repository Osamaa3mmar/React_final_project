import { Link, useNavigate } from 'react-router-dom'
import style from '../style.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRightLong } from '@fortawesome/free-solid-svg-icons'; // Import the icon
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { useState } from 'react';
import {  toast } from 'react-toastify';

export default function SignupForm() {
  const success= {
    render: "Account created Success! 🎉 (Check your Email Address)",
    type: "success",
    isLoading: false,
    autoClose: 3000, 
    pauseOnHover: true,
    closeButton:'true'
  }

  const {register,handleSubmit}=useForm();
  const [loading,setLoading]=useState(false);
  const navigate=useNavigate();
  const submit=async (value)=>{
    const toastId = toast.loading("Processing...");
    try{
      setLoading(true);
   
    const response=await axios.post('https://ecommerce-nonde4.onrender.com/auth/signup',value);
    console.log(response)
    if(response.status===201){
         toast.update(toastId,success);
        navigate('/');
      }
    }catch(e){
      if(e.response.status===409){
        toast.update(toastId, {
          render: `Error ouccare with code : 409`,
          type: "error",
          isLoading: false,
          autoClose: 3000, 
          pauseOnHover: true
        });
      }
      toast.update(toastId, {
        render: `${e.message}`,
        type: "error",
        isLoading: false,
        autoClose: 3000, 
        pauseOnHover: true
      });
    }finally{
      setLoading(false);
    }
  }

  

  return (<>
  
    <div className={style.formContainer}>
     
      <h2 className={style.logo}>Logo</h2>
      
      <h1 className={style.log}>SignUp</h1>
      <form className={style.form} onSubmit={handleSubmit(submit)} >
      <div className={style.formInput}>
            <label htmlFor="username" className={style.formLabel}>User Name</label>
            <input type="text" required {...register("userName")} className={style.realInput} id='username' />
        </div>
        <div className={style.formInput}>
            <label htmlFor="email" className={style.formLabel}>Email</label>
            <input type="text" required {...register("email")} className={style.realInput} id='email' />
        </div>
        <div className={style.formInput}>
            <div className={style.paswordContainer}>
            <label htmlFor="password" className={style.formLabel}>Password</label>

            </div>
            <input type="password" required {...register("password")} id='password' className={style.realInput} />
        </div>
        <div  className={style.submitBtn}>
          
        {loading?<div className={style.in}>Loading</div> :<input  type="submit"className={style.in} value={"Signup"}  />}
        <FontAwesomeIcon icon={faRightLong} />

        </div>
      </form>
      <p className={style.forget}>Allredy have an account ? <Link className={style.toggleLog} to={"/"}>Login</Link></p>
    </div>
    </>
  )
}
