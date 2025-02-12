import { Link } from 'react-router-dom'
import style from './row.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretDown, faCaretUp, faMinus } from '@fortawesome/free-solid-svg-icons'
import { Col, Row } from 'react-bootstrap'
import { useState } from 'react'
export default function CartRow({productId,quantity,details,onClick}) {

    const [tempQuantity,setTepmQuantity] = useState(quantity)
    const clicked=()=>{
        onClick(productId);
    }
    

    const increase=()=>{
    setTepmQuantity(tempQuantity+1);
    }

    const decrease=()=>{
        setTepmQuantity(tempQuantity!=1?tempQuantity-1:1);
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
        <p>{tempQuantity}</p>
        <div className={style.cret}>
        <FontAwesomeIcon className={style.cretIcon} onClick={increase} icon={faCaretUp} />
        <FontAwesomeIcon className={style.cretIcon} onClick={decrease} icon={faCaretDown} />
        </div>
      </Col>
      <Col sm={3} className={style.cols}>
        <p className={style.green}>{details.finalPrice}</p>
      </Col>
      <div className={style.deleteIcon} onClick={clicked}><FontAwesomeIcon icon={faMinus} /></div>
    </Row>
  )
}
