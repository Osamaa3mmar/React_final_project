import React from 'react'
import { Link } from 'react-router-dom'

export default function LoginForm() {
  return (
    <div>
      <h2>Logo</h2>
      <p>Welcome back !!!</p>
      <h1>Sing in</h1>
      <form >
        <div className="input">
            <label htmlFor="">Email</label>
            <input type="text" />
        </div>
        <div className="input">
            <div className="text">
                <p>Forgot Password ?</p>
            <label htmlFor="">Password</label>
            </div>
            <input type="text" />
        </div>
        <input type="submit" />

      </form>
      <p>I don’t have an account ? <Link to={"/signup"}>Sign up</Link></p>
    </div>
  )
}
