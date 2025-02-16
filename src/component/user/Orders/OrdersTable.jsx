import { useState } from 'react'
import style from './table.module.css'
import axios from 'axios';
import { useEffect } from 'react';
import Loading from '../loading/Loading';
import { toast } from 'react-toastify';
export default function OrdersTable() {

    const [order,setOrders]=useState(null);
    const [loading,setLoading]=useState(true);
    const [error,setError]=useState(null);


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
        const toasId=toast.loading('Loading . . . ');
        try{
            const {data}=await axios.patch(`https://ecommerce-node4.onrender.com/order/cancel/${id}`,'',{
                headers:{
                    Authorization: `Tariq__${localStorage.getItem('token')}`
                }
            })
        console.log(data);
        toast.success("Order canceled !");
        getData()
        }
        catch(e){
            toast.error(e.message);
        }
        finally{
            toast.dismiss(toasId)
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
                        <td className={style.data}><div className={order.status=='pending'?style.pinding:order.status=='deliverd'?style.deliverd:''}><span ></span>{order.status}</div></td>
                        <td className={style.data}>${order.finalPrice}</td>
                        <td className={style.data}>{order.address}</td>
                        <div className={style.cancele} onClick={()=>canceleOrder(order._id)}>cancele</div>
                    </tr>
                })}
                
            </tbody>
        </table>
        :'empty'}
       

    </div>
  )
}
