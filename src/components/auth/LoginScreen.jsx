import { useEffect } from "react";
import Swal from "sweetalert2";
import { useAuthStore, useForm } from '../../hooks';

const loginFormFields = {
  loginEmail:    '',
  loginPassword: '',
}

const registerFormFields = {
  name:      '',
  registerEmail:     '',
  registerPassword:  '',
  registerPasswordRep: '',
}

export const LoginScreen = () => {


  const { startLogin, errorMessage, startRegister} = useAuthStore();

  const { loginEmail, loginPassword, onInputChange:onLoginInputChange } = useForm( loginFormFields );
  const { registerEmail, name, registerPassword, registerPasswordRep, onInputChange:onRegisterInputChange } = useForm( registerFormFields );

const loginSubmit = ( event ) => {
  event.preventDefault();
  startLogin({ email: loginEmail, password: loginPassword });
}

const registerSubmit = ( event ) => {
  event.preventDefault();
  if ( registerPassword !== registerPasswordRep ) {
      Swal.fire('Error en registro', 'Passwords must be the same', 'error');
      return;
  }

  startRegister({ name: name, email: registerEmail, password: registerPassword });
}

useEffect(() => {
  console.log(errorMessage);
  if( errorMessage !== undefined) {
    Swal.fire('Error in authentification', errorMessage, "error")
  }
}, [errorMessage])


  return (
    <div className='login'>
      <div className="login-form-container">
        <form className='login-form' onSubmit={loginSubmit }>
          <h2>Login</h2>
          <div className="input-container">
            <label htmlFor='email'>Email address</label>
            <input type="email" id='email' className='input' name="loginEmail" value={loginEmail} onChange={onLoginInputChange}/>
          </div>
          <div className="input-container">
            <label htmlFor='password'>Password</label>
            <input type="password" id='password' className='input' name="loginPassword" value={loginPassword} onChange={onLoginInputChange}/>
          </div>
          <div className="login-btn-container">
            <button className='login-btn' type="submit">Log In</button>
          </div>
        </form>
      </div>
      <div className="login-form-container register">
    <form className='register-form' onSubmit={registerSubmit}>
      <h2>Register</h2>
      <div className="input-container">
        <label htmlFor='name'>Name</label>
        <input type="text" id='name' className='input' name='name' value={name} onChange={onRegisterInputChange}/>
      </div>
      <div className="input-container">
        <label htmlFor='email'>Email address</label>
        <input type="email" id='email' className='input' name='registerEmail' value={registerEmail} onChange={onRegisterInputChange}/>
      </div>
      <div className="input-container">
        <label htmlFor='password'>Password</label>
        <input type="password" id='password' className='input' name='registerPassword' value={registerPassword} onChange={onRegisterInputChange} />
      </div>
      <div className="input-container">
        <label htmlFor='password'>Repeat password</label>
        <input type="password" id='password' className='input' name='registerPasswordRep' value={registerPasswordRep} onChange={onRegisterInputChange}/>
      </div>
      <div className="login-btn-container">
        <button className='login-btn'>Register</button>

      </div>
    </form>

    </div>
    </div>
  )
}
