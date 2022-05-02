import React from 'react'
import { Link } from 'react-router-dom'

export const RegisterScreen = () => {
  return (
    <div className='login'>

    <div className="login-form-container">
      <form >
        <h2>Register</h2>
        <div className="input-container">
          <label htmlFor='name'>Name</label>
          <input type="email" id='name' className='input' />
        </div>
        <div className="input-container">
          <label htmlFor='email'>Email address</label>
          <input type="email" id='email' className='input' />
        </div>
        <div className="input-container">
          <label htmlFor='password'>Password</label>
          <input type="email" id='password' className='input' />
        </div>
        <div className="input-container">
          <label htmlFor='password'>Repeat password</label>
          <input type="email" id='password' className='input' />
        </div>
        <div className="login-btn-container">
          <button>Create Account</button>
        </div>
      </form>
      <Link to="/">Already registered</Link>
    </div>
  </div>
  )
}
