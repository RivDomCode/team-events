import React from 'react'
import { Link } from 'react-router-dom'

export const LoginScreen = () => {
  return (
    <div className='login'>

      <div className="login-form-container">
        <form >
          <h2>Login</h2>
          <div className="input-container">
            <label htmlFor='email'>Email address</label>
            <input type="email" id='email' className='input' />
          </div>
          <div className="input-container">
            <label htmlFor='password'>Password</label>
            <input type="email" id='password' className='input' />
          </div>
          <div className="login-btn-container">
            <button>Log In</button>
          </div>

        </form>
        <Link to="/register">Do not have an account yet? Go to register page</Link>
      </div>
    </div>
  )
}
