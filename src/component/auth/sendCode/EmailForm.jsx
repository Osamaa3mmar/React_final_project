import axios from 'axios';
import { useRef, useState } from 'react';
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import style from './forget.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-regular-svg-icons';
export default function EmailForm() {
    const navigate=useNavigate();
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const [email,setEmail]=useState(null);
    const {register,handleSubmit}=useForm();
    const [password,setPassword]=useState(false);
    const [sentCode,setSentCode]=useState(false);
    const passForm=useRef();


    const passEye=()=>{
        setPassword(!password);
    }
    const makeAnimation=()=>{
        passForm.current.classList.add(style.passCodeFormActive)
    }
    const sendPass=async (info)=>{
        if(info.confirmPassword!=info.newPassword)
        {
            toast.error("the password is not the same in confirm password field");
        }
        else{
        const toastLoading=toast.loading('processing . . . ');
        try{
            console.log(`${info.code1}${info.code2}${info.code3}${info.code4}`)
            const {data}=await axios.patch('https://ecommerce-node4.onrender.com/auth/forgotPassword',{
                email:email,
                password:info.newPassword,
                code:`${info.code1}${info.code2}${info.code3}${info.code4}`
            })
            console.log(data);
            toast.success("Password change successful !");
            navigate('/');
        }
        catch(e){
            toast.error(e.response.data.message);
        }
        finally{
            toast.dismiss(toastLoading);
        }
    }
    }
    const sendCode=async(info)=>{
        if(emailRegex.test(info.email)){
            const loadingToast = toast.loading("Sending code . . . ");
            try{
                const {data}=await axios.patch('https://ecommerce-node4.onrender.com/auth/sendcode',{
                    email:info.email
                })
               
                toast.success(`${data.message} check your email`);
                setEmail(info.email);
                setSentCode(true);
                makeAnimation();
            }catch (e){
                toast.error(e.message);
            }
            finally{
                toast.dismiss(loadingToast);
            }
        }
        else{
            toast.error("Please enter a valid email")
        }
    }
  return (<div className={`container ${style.container}`}>
    <form className={style.emailForm}  onSubmit={handleSubmit(sendCode)}>
    <input placeholder='Email' required className={style.input} type="text" {...register("email")}/>
    <input type="submit" disabled={sentCode?true:false}  className={sentCode?style.sendEmailBtnDis:style.sendEmailBtn} value={"Send Code"} />
    </form>
    <form className={style.passCodeForm} ref={passForm} onSubmit={handleSubmit(sendPass)}>
        <div className={style.passInput}>
            <div className={style.pass}>
        <input placeholder='New Password' className={style.input} disabled={sentCode?false:true} type={password?'text':"password"} {...register('newPassword')} required/>
        <div className={style.eyeIcon} onClick={passEye}>
        {password?<FontAwesomeIcon className={style.icon} disabled={sentCode?false:true} icon={faEyeSlash} />: <FontAwesomeIcon className={style.icon} disabled={sentCode?false:true} icon={faEye} />}
        </div>
        </div>
        <input placeholder='Confirm Password' className={style.input} disabled={sentCode?false:true} type="password" {...register('confirmPassword')} required/>
        </div>
                <div className={style.codeCont}>
            <p className={style.head}>
                Put Code Here
            </p>
        <div className={style.code}>
            <input type="text" required className={style.codeInput} disabled={sentCode?false:true} {...register('code1')} maxLength={1} />
            <input type="text" required className={style.codeInput} disabled={sentCode?false:true} {...register('code2')} maxLength={1} />
            <input type="text" required className={style.codeInput} disabled={sentCode?false:true} {...register('code3')} maxLength={1} />
            <input type="text" required className={style.codeInput} disabled={sentCode?false:true} {...register('code4')} maxLength={1} />
        </div>
        </div>
        
        <input type="submit" value={"Change Password"}/>
    </form>
    </div>
  )
}
