import { Link } from 'react-router-dom'
import style from '../style.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRightLong } from '@fortawesome/free-solid-svg-icons'; // Import the icon
import { useForm } from 'react-hook-form';

export default function SignupForm() {
  const {register,handleSubmit}=useForm();
  const submit=(value)=>{
    console.log(value)
  }

  

  return (
    <div className={style.formContainer}>
      <h2 className={style.logo}>Logo</h2>
      
      <h1 className={style.log}>SignUp</h1>
      <form className={style.form} onSubmit={handleSubmit(submit)} >
      <div className={style.formInput}>
            <label htmlFor="username" className={style.formLabel}>User Name</label>
            <input type="text" required {...register("userName")} className={style.realInput} id='username' />
        </div>
        <div className={style.formInput}>
            <label htmlFor="email" className={style.formLabel}>Email</label>
            <input type="text" required {...register("email")} className={style.realInput} id='email' />
        </div>
        <div className={style.formInput}>
            <div className={style.paswordContainer}>
            <label htmlFor="password" className={style.formLabel}>Password</label>

            </div>
            <input type="password" required {...register("password")} id='password' className={style.realInput} />
        </div>
        <div className={style.submitBtn}>
        <input type="submit"className={style.in} value={"Signup"}  />
        <FontAwesomeIcon icon={faRightLong} />

        </div>
      </form>
      <p className={style.forget}>Allredy have an account ? <Link className={style.toggleLog} to={"/"}>Login</Link></p>
    </div>
  )
}
