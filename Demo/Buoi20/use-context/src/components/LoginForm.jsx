import React, {useContext} from "react";
import { ThemeContext } from "../Context/ThemeContext";


function LoginForm(){
  const {theme,handleChangeTheme } = useContext(ThemeContext)
    return(
      <div className={`p-2 ${theme}`}>
        <h3>Login Form</h3>
        <form>
          <div className="form-group mb-3">
            <input type="email" className="form-control" placeholder="Email" />
          </div>
  
          <div className="form-group mb-3">
            <input type="password" className="form-control" placeholder="Password" />
          </div>
  
          <div className="form-group mb-3">
            <button type='submit' className="btn btn-success me-3">Login</button>
            <button type='button' className='btn btn-danger' 
            onClick={handleChangeTheme}
            >Dark Mode</button>
          </div>
        </form>
      </div>
    )
  }

  export default LoginForm