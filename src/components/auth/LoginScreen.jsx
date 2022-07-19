import  { useState } from "react"
import { useAuthStore } from "../../hooks/useAuthStore";
import { Error } from "./Error";
import { Register } from "./Register"

export const LoginScreen = () => {

  const { startLogin} = useAuthStore();

  const [error, setError] = useState(false);

  const loginFormFields ={
    loginEmail:"",
    loginPassword:""
  }

  const [loginValue, setLoginValue] = useState(loginFormFields);

  const { loginEmail, loginPassword } = loginValue;

  const handleLoginChange = ({target}) => {
    setLoginValue({
      ...loginValue,
      [target.name]:target.value,
    })
  }

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    if([loginEmail, loginPassword].includes("")){
      setError(true);
      return;
    }
      setError(false)
      console.log({ loginEmail, loginPassword})
      startLogin({ email: loginEmail, password:loginPassword});

  }


  return (
    <div className='login'>
      <div className="login-form-container">
        <form className='login-form' onSubmit={handleLoginSubmit}>
          <h2>Login</h2>
          <div className="input-container">
            <label htmlFor='email'>Email address</label>
            <input type="email" id='email' className='input' name="loginEmail" value={loginEmail} onChange={handleLoginChange}/>
          </div>
          <div className="input-container">
            <label htmlFor='password'>Password</label>
            <input type="password" id='password' className='input' name="loginPassword" value={loginPassword} onChange={handleLoginChange}/>
          </div>
          <div className="login-btn-container">
            <button className='login-btn' type="submit">Log In</button>
          </div>
          { error && <Error msg="All fields are required"/>}
        </form>
      </div>
      <Register/>
    </div>
  )
}
