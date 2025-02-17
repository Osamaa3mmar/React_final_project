import { useState } from 'react'
import style from './table.module.css'
import axios from 'axios';
import { useEffect } from 'react';
import Loading from '../loading/Loading';
import { toast } from 'react-toastify';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faX } from '@fortawesome/free-solid-svg-icons';
export default function OrdersTable() {

    const [order,setOrders]=useState(null);
    const [loading,setLoading]=useState(true);
    const [error,setError]=useState(null);
    const [tempLoading,setTempLoading]=useState(false);

    const getData=async()=>{
        
        try{
            const {data}=await axios.get('https://ecommerce-node4.onrender.com/order',{
                headers: {
                    Authorization: `Tariq__${localStorage.getItem('token')}`
                }
                
                
            }); 
            console.log(data)
            
            setError(null);
            setOrders(data.orders);
        }
        catch(e){
            setError(e.message)
            setOrders(null);
        }
        finally{
            setLoading(false);
        }
    }


    const canceleOrder=async(id)=>{
        setTempLoading(true);
        const toasId=toast.loading('Loading . . . ');
        try{
            const {data}=await axios.patch(`https://ecommerce-node4.onrender.com/order/cancel/${id}`,'',{
                headers:{
                    Authorization: `Tariq__${localStorage.getItem('token')}`
                }
            })
        console.log(data);
        toast.success("Order canceled !");
        const current=order.find((item)=>{
            return data.order._id===item._id;
        }).status='cancelled';
        console.log(current);
        setTempLoading(false);
        }
        catch(e){
            toast.error(e.message);
        }
        finally{
            toast.dismiss(toasId)
            setTempLoading(false);
        }
    }




useEffect(()=>{
    getData();
},[])
if(loading){
    return <Loading/>
}
  return (
    <div className='ps-4' >
        {error?<div className='alert alert-danger'>{error}</div>:''}

        {order&&order.length>0?
        <table className={style.table}>
            <thead>
                <tr>
                    <th>Status</th>
                    <th>Total</th>
                    <th>Address</th>
                </tr>
            </thead>
            <tbody>
                {order.map((order)=>{
                    return <tr className={style.row} key={order._id}>
                        <td className={style.data}><div className={order.status=='pending'?style.pinding:order.status=='deliverd'?style.deliverd:style.cancele}><span ></span>{order.status}</div></td>
                        <td className={style.data}>${order.finalPrice}</td>
                        <td className={style.data}>{order.address}</td>
                        {order.status=='pending'?<td className={style.canceleBtn} onClick={tempLoading?'':()=>canceleOrder(order._id)}><FontAwesomeIcon icon={faX} /></td>:''}
                    </tr>
                })}
                
            </tbody>
        </table>
        :'empty'}
       

    </div>
  )
}
