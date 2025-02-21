import React from 'react'
import style from '../style.module.css'
import LoginForm from '../../../component/auth/Login/LoginForm'
import { useForm } from 'react-hook-form'
export default function Login() {



  return (
    <div className={style.container}>
      <div className={style.halfStart}>
        <LoginForm/>
      </div>
    </div>
  )
}
