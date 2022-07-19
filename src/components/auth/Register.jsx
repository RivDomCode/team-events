import {useState} from 'react';
import { Error } from "./Error";

export const Register = () => {

  //form error
  const [error, setError] = useState(false);

    const registerFormFields ={
        name:"",
        registerEmail:"",
        registerPassword:"",
        registerPasswordRep:""
      }
    
      const [registerValue, setRegisterValue] = useState(registerFormFields);

      const { name, registerEmail, registerPassword, registerPasswordRep } = registerValue;

      const handleRegisterChange = ({target}) => {
        setRegisterValue({
          ...registerValue,
          [target.name]:target.value,
        })
      }
    
      const handleRegisterSubmit = (e) => {
        e.preventDefault();
        e.preventDefault();
        if([name, registerEmail, registerPassword, registerPasswordRep].includes("")){
          setError(true);
          return;
        }
        setError(false)
        console.log({ name, registerEmail, registerPassword, registerPasswordRep});
        setRegisterValue(registerFormFields)

      }

  return (
    <div className="login-form-container register">
    <form className='register-form' onSubmit={handleRegisterSubmit}>
      <h2>Register</h2>
      <div className="input-container">
        <label htmlFor='name'>Name</label>
        <input type="text" id='name' className='input' name='name' value={name} onChange={handleRegisterChange}/>
      </div>
      <div className="input-container">
        <label htmlFor='email'>Email address</label>
        <input type="email" id='email' className='input' name='registerEmail' value={registerEmail} onChange={handleRegisterChange}/>
      </div>
      <div className="input-container">
        <label htmlFor='password'>Password</label>
        <input type="password" id='password' className='input' name='registerPassword' value={registerPassword} onChange={handleRegisterChange} />
      </div>
      <div className="input-container">
        <label htmlFor='password'>Repeat password</label>
        <input type="password" id='password' className='input' name='registerPasswordRep' value={registerPasswordRep} onChange={handleRegisterChange}/>
      </div>
      <div className="login-btn-container">
        <button className='login-btn'>Register</button>

      </div>
      {error && <Error msg="All fields are required"/> }
    </form>

    </div>
  )
}
