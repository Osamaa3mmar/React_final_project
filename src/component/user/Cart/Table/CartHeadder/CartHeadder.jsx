import { Col, Row } from 'react-bootstrap'
import style from './Headder.module.css'
export default function CartHeadder() {
  return (
    <Row className={style.headderContainer}>
    <Col sm={3} className={style.headderTitle}>Product</Col>
    <Col sm={3} className={style.headderTitle}>Price</Col>
    <Col sm={3} className={style.headderTitle}>Quantity</Col>
    <Col sm={3} className={style.headderTitle}>Subtotal</Col>
    </Row>
  )
}
