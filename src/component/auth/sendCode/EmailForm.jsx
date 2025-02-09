import axios from 'axios';
import { useState } from 'react';
import { useForm } from 'react-hook-form'
import { toast } from 'react-toastify';

export default function EmailForm() {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const [email,setEmail]=useState(null);
    const {register,handleSubmit}=useForm();
    const sendPass=async (info)=>{
        const toastLoading=toast.loading('processing . . . ');
        try{
            const {data}=await axios.patch('https://ecommerce-node4.onrender.com/auth/forgotPassword',{
                email:email,
                password:info.newPassword,
                code:info.code
            })
            console.log(data);
        }
        catch(e){
            toast.error(e.message);
        }
        finally{
            toast.dismiss(toastLoading);
        }
    }
    const sendCode=async(info)=>{
        const loadingToast = toast.loading("Sending code . . . ");
        





        if(emailRegex.test(info.email)){
            try{
                const {data}=await axios.patch('https://ecommerce-node4.onrender.com/auth/sendcode',{
                    email:info.email
                })
                console.log(data)
                toast.success("check your email");
                setEmail(info.email);
            }catch (e){
                console.log(e)
            }
            finally{
                toast.dismiss(loadingToast);
            }
        }
        else{
            toast.dismiss(loadingToast);
            toast.error("Please enter a valid email")
        }
    }
  return (<div>
    <form onSubmit={handleSubmit(sendCode)}>

    <input type="text" {...register("email")}/>
    <input type="submit" />
    </form>
    <form onSubmit={handleSubmit(sendPass)}>
        <input type="text" {...register('newPassword')} required/>
        <input type="text" {...register('code')} required/>
        <input type="submit"/>
    </form>
    </div>
  )
}
