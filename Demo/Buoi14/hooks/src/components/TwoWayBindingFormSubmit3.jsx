import React from "react";
import App from "../App";
import { useState } from "react";
import SuccessAlert from "./Alert/SuccessAlert";
import ErrorAlert from "./Alert/ErrorAlert";

function TwoWayBindingFormSubmit3(){
    const [state,setState] = useState({
        email: '',
        password: '',
        mobile: '',
        isSuccess: false,
    })
    // const [email,setEmail] = useState()
    // const[password,setPassword] = useState()
    // const [isSuccess, setIsSuccess] = useState(false)
    const [showAlert, setShowAlert] = useState(false)
   

    const handleSubmitLogin = (e) =>{
        e.preventDefault()
        if(email === 'phuclamle.@gmail.com' && password === '12345678'){
            setState({
                ...state,
                isSuccess: true
        })
    }
        else{
            setState({
                ...state,
                isSuccess: false
            })
        }
        setShowAlert(true)
 
    }
    const handleGetAccount = ()=>{
        // fetching data from api
        setState({
            email:'phuclamle.@gmail.com',
            password:'12345678'
        })
        // setEmail('phuclamle.@gmail.com')
        // setPassword('12345678')
    }
    const handleInputValue = (e) =>{
        console.log(e);
        setState({
            ...state,
            // phải có ngoặc vuông vì tên thuộc tính không chấp nhận dấu chấm
            [e.target.name] : e.target.value
        })
        
    }
 
 const {email, password,mobile, isSuccess} = state;
//  let job = {
//     name: 'java'
//  }
//  job.name 
//  job['name']
    return(
       
        <div>
            <h1>Login Form</h1>
            {
              isSuccess && <SuccessAlert showAlert={showAlert} setShowAlert={setShowAlert} content = {"Đăng nhập thành công"}/>   
              || !isSuccess && <ErrorAlert showAlert={showAlert} setShowAlert={setShowAlert} content = {"Đăng nhập thất bại"} />
            }
            <form onSubmit={handleSubmitLogin}>
                <div className="form-group mb-3">
                    <label htmlFor="">Email</label>
                    {/* requied action when form is send to server  */}
                    <input type="email" className="form-control" required
                    value={email}
                    name="email"
                    onInput={handleInputValue}
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="">Password</label>
                    <input type="password" minLength={8}  className="form-control" required
                    value={password}
                    name= 'password'
                    onInput={handleInputValue}
                    />
                </div>
                <div className="form-group mb-3">
                    <label htmlFor="">Mobile</label>
                    {/* requied action when form is send to server  */}
                    <input type="tel" className="form-control" required
                    value={mobile}
                    name="mobile"
                    onInput={handleInputValue}
                    />
                </div>
                <div className="form-group m-3">
                    <button type="submit" className="btn btn-dark me-3">Login</button>
                    <button type="button" className="btn btn-warning" onClick={handleGetAccount}>Get Account</button>
                </div>
            </form>
        </div>
    )
}

export default TwoWayBindingFormSubmit3;