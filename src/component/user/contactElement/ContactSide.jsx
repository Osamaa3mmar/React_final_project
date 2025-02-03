import { faPhone } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import style from './contact.module.css'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'

export default function ContactSide() {
  return (
    <div className={style.cont}>

      <div className={style.content}>
        <div className={style.logo}>
        <FontAwesomeIcon className={style.icon} icon={faPhone} />
            <p>Call To Us</p>
        </div>
        <p className="description">
        We are available 24/7, 7 days a week.
        </p>
        <p className="phone">
            +91 1234567890
        </p>
      </div>
      <div className={style.line}></div>

      <div className={style.content}>
        <div className={style.logo}>
        <FontAwesomeIcon className={style.icon} icon={faEnvelope} />      
              <p>Write To US</p>
        </div>
        <p className="description">
        Fill out our form and we will contact you within 24 hours.
                </p>
        <p className="phone">
        Emails: customer@exclusive.com      
          </p>
      </div>
    </div>
  )
}
