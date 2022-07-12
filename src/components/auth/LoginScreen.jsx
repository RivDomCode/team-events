import React from 'react'
import { Link } from 'react-router-dom'

export const LoginScreen = () => {
  return (
    <div className='login'>

      <div className="login-form-container">
        <form className='login-form'>
          <h2>Login</h2>
          <div className="input-container">
            <label htmlFor='email'>Email address</label>
            <input type="email" id='email' className='input' />
          </div>
          <div className="input-container">
            <label htmlFor='password'>Password</label>
            <input type="password" id='password' className='input' />
          </div>
          <div className="login-btn-container">
            <button className='login-btn'>Log In</button>
          </div>
        </form>
      </div>
      <div className="login-form-container register">
      <form className='register-form'>
        <h2>Register</h2>
        <div className="input-container">
          <label htmlFor='name'>Name</label>
          <input type="name" id='name' className='input' />
        </div>
        <div className="input-container">
          <label htmlFor='email'>Email address</label>
          <input type="email" id='email' className='input' />
        </div>
        <div className="input-container">
          <label htmlFor='password'>Password</label>
          <input type="password" id='password' className='input' />
        </div>
        <div className="input-container">
          <label htmlFor='password'>Repeat password</label>
          <input type="password" id='password' className='input' />
        </div>
        <div className="login-btn-container">
          <button className='login-btn'>Register</button>
        </div>
      </form>
    </div>
    </div>
  )
}
