import React from 'react'
import ServiceCard from './ServiceCard'
import img1 from '../../../public/homepage/Icon-Customer-service.svg'
import img2 from '../../../public/homepage/icon-delivery.svg'
import img3 from '../../../public/homepage/Icon-secure.svg'

export default function Services() {
  return (
    <div className='row py-5 my-5'>
        <div className="col-lg-4 col-sm-12">
      <ServiceCard  title={"FREE AND FAST DELIVERY"} p={"Free delivery for all orders over $140"} img={img2}/>

        </div>
        <div className="col-lg-4 col-sm-12"> 
      <ServiceCard title={"24/7 CUSTOMER SERVICE"} p={"Friendly 24/7 customer support"} img={img1}/>

        </div>
        <div className="col-lg-4 col-sm-12">
      <ServiceCard title={"MONEY BACK GUARANTEE"} p={"We reurn money within 30 days"} img={img3}/>

        </div>
    </div>
  )
}
