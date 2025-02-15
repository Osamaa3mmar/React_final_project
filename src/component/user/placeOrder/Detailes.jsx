import  { useContext, useState } from 'react'
import {  Form } from 'react-bootstrap'
import style from './order.module.css'
import { useForm } from 'react-hook-form'
import axios from 'axios';
import { toast } from 'react-toastify';
import { CartContext } from '../Cart/CartContext/CartContext';
import { useNavigate } from 'react-router-dom';
export default function Detailes() {
    const {handleSubmit,register}=useForm();
    const [loading,setLoading]=useState(false);
    const {setCartCount}=useContext(CartContext);
    const navigate=useNavigate();
    const createOrder=async(info)=>{
        setLoading(true);
        let tId=toast.loading("Place the order");
        try{
            await axios.post('https://ecommerce-node4.onrender.com/order',info,{
                headers:{
                    Authorization:`Tariq__${localStorage.getItem('token')}`
                }
            })
            setCartCount(0);
            toast.success('order Successfully Placed !');
            navigate('/user/profile/orders');
        }
        catch(e){
            toast.error(e.message)
        }
        finally{
            toast.dismiss(tId);
            setLoading(false);
        }
    }
  return (
    <div className={style.cont}>
      <h3 className="headder">Billing Details</h3>
      <Form onSubmit={handleSubmit(createOrder)}>
    
    <Form.Floating className="mb-3">
        <Form.Control 
            {...register('address')} 
            className={style.input} 
            type="text" 
            placeholder="Address" 
            required
        />
        <Form.Label>Address</Form.Label>
    </Form.Floating>

    <Form.Floating className="mb-3">
        <Form.Control 
            {...register('phone')} 
            className={style.input} 
            type="text" 
            placeholder="Phone" 
            required
        />
        <Form.Label>Phone</Form.Label>
    </Form.Floating>

    <Form.Floating className="mb-3">
        <Form.Control 
            {...register('couponName')} 
            className={style.input} 
            type="text" 
            placeholder="Coupon" 
        />
        <Form.Label>Coupon</Form.Label>
    </Form.Floating>

    <button className={style.submit} disabled={loading}>
        {loading ? 'Loading' : 'Proceed to Checkout'}
    </button>

</Form>

    </div>
  )
}
