import { Link, useNavigate } from 'react-router-dom'
import style from '../style.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRightLong } from '@fortawesome/free-solid-svg-icons'; // Import the icon
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useState } from 'react';

export default function LoginForm() {
  const {register,handleSubmit}=useForm();
  const [loading,setLoading]=useState(false);
  const navigate=useNavigate();
  const submit= async (value)=>{
    const toastId = toast.loading("Processing...");
    setLoading(true);
    try{
      const response=await axios.post('https://ecommerce-node4.onrender.com/auth/signin',value);
      console.log(response);
      if(response.status===200){
        console.log(response.data.token)
        localStorage.setItem('tokin',response.data.token);
        toast.update(toastId,{
          render: "Login success",
          type: "success",
          isLoading: false,
          autoClose: 3000, 
          pauseOnHover: true,
          closeButton:'true'
        })
        navigate('/user');
      }
    }
    catch(e){
      console.log(e);
      toast.update(toastId,{
        render: e.response.data.message,
        type: "error",
        isLoading: false,
        autoClose: 3000, 
        pauseOnHover: true,
        closeButton:'true'
      })
    }
    finally{
      setLoading(false);
    }
  }
  return (
    <div className={style.formContainer}>
      <h2 className={style.logo}>Logo</h2>
      <p className={style.para}>Welcome back !!!</p>
      <h1 className={style.log}>Singin</h1>
      <form className={style.form} onSubmit={handleSubmit(submit)}>
        <div className={style.formInput}>
            <label htmlFor="email" className={style.formLabel}>Email</label>
            <input type="text" {...register('email')} required className={style.realInput} id='email' />
        </div>
        <div className={style.formInput}>
            <div className={style.paswordContainer}>
            <label htmlFor="password" className={style.formLabel}>Password</label>
            <p className={style.para} style={{fontSize:"10px",color:"var(--primary)" }}>Forgot Password ?</p>

            </div>
            <input type="password" {...register('password')} required id='password' className={style.realInput} />
        </div>
        <div className={style.submitBtn}>
        <input type="submit"className={style.in} value={loading?"Loading...":"Login"}  />
        <FontAwesomeIcon icon={faRightLong} />

        </div>
      </form>
      <p className={style.forget}>I don’t have an account ? <Link className={style.toggleLog} to={"/signup"}>Sign up</Link></p>
    </div>
  )
}
