import { Link } from 'react-router-dom'
import style from '../style.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRightLong } from '@fortawesome/free-solid-svg-icons'; // Import the icon

export default function LoginForm() {
  return (
    <div className={style.formContainer}>
      <h2 className={style.logo}>Logo</h2>
      <p className={style.para}>Welcome back !!!</p>
      <h1 className={style.log}>Singin</h1>
      <form className={style.form}>
        <div className={style.formInput}>
            <label htmlFor="email" className={style.formLabel}>Email</label>
            <input type="text" required className={style.realInput} id='email' />
        </div>
        <div className={style.formInput}>
            <div className={style.paswordContainer}>
            <label htmlFor="password" className={style.formLabel}>Password</label>
            <p className={style.para} style={{fontSize:"10px",color:"var(--primary)" }}>Forgot Password ?</p>

            </div>
            <input type="password" required id='password' className={style.realInput} />
        </div>
        <div className={style.submitBtn}>
        <input type="submit"className={style.in} value={"Login"}  />
        <FontAwesomeIcon icon={faRightLong} />

        </div>
      </form>
      <p className={style.forget}>I don’t have an account ? <Link className={style.toggleLog} to={"/signup"}>Sign up</Link></p>
    </div>
  )
}
