import { Link } from 'react-router-dom'
import style from './row.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretDown, faCaretUp, faMinus } from '@fortawesome/free-solid-svg-icons'
import { Col, Row } from 'react-bootstrap'
import { useContext, useState } from 'react'
import { CartContext } from '../../CartContext/CartContext'
import axios from 'axios'
import { toast } from 'react-toastify'
import RowLoading from './RowLoading'
export default function CartRow({productId,quantity,details,onClick}) {
    const [qyt,setQyt]=useState(false); 
    const [tempQuantity,setTepmQuantity] = useState(quantity)
    const clicked=()=>{
        onClick(productId);
    }
   
    const increase= async ()=>{
      setQyt(true);
      try{
      const {data}=await axios.patch('https://ecommerce-node4.onrender.com/cart/incraseQuantity',
      {
          productId:productId
       }
        ,
        {
       headers:{
        Authorization: `Tariq__${localStorage.getItem('token')}`
       }} 
      )
      
      console.log(data)
    }catch(e){
      console.log(e.message);
    }
    setQyt(false)

      setTepmQuantity(prev=>prev+1);
    }

    const decrease=async ()=>{
      setQyt(true);
      if(tempQuantity>1){      
      try{
        const {data}=await axios.patch('https://ecommerce-node4.onrender.com/cart/decraseQuantity',
        {
            productId:productId
         }
          ,
          {
         headers:{
          Authorization: `Tariq__${localStorage.getItem('token')}`
         }} 
        )
        console.log(data)
      }catch(e){
        console.log(e.message);
      }
      setQyt(false)
      setTepmQuantity(prev=>prev-1);
    }
    else{
      toast.info("You cant decrease the quantity");
      setQyt(false)

    }
       
    }
  return (
    <Row className={style.row}>
      <Col sm={3} className={style.nameImg} >
        <img src={details.mainImage.secure_url} alt="" />
        <Link className={style.Link} to={`/user/product/${productId}`}>
        <p>{details.name.split(/\s+/).slice(0, 4).join(' ')}</p>
        </Link>
      </Col>
      <Col sm={3} className={style.cols} >
        <p className={style.green}> {"$"+details.finalPrice}</p>
      </Col>
      <Col sm={3} className={style.cols} >
        <p>{qyt?<RowLoading/>:tempQuantity}</p>
        <div className={style.cret}>
        <FontAwesomeIcon className={style.cretIcon} onClick={increase} icon={faCaretUp} />
        <FontAwesomeIcon className={style.cretIcon} onClick={decrease} icon={faCaretDown} />
        </div>
      </Col>
      <Col sm={3} className={style.cols}>
        <p className={style.green}>$ {(details.finalPrice * tempQuantity).toFixed(2)}</p>
      </Col>
      <div className={style.deleteIcon} onClick={clicked}><FontAwesomeIcon icon={faMinus} /></div>
    </Row>
  )
}
