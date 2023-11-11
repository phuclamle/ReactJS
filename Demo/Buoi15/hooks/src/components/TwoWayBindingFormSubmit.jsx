import React from "react";
import App from "../App";
import { useState } from "react";

function TwoWayBindingFormSubmit(){
    const [email,setEmail] = useState()
    const[password,setPassword] = useState()
    const [isSuccess, setIsSuccess] = useState(false)
    const [showAlert, setShowAlert] = useState(false)


    const handleSubmitLogin = (e) =>{
        e.preventDefault()
        if(email === 'phuclamle.@gmail.com' && password === '12345678'){
            setIsSuccess(true)
        }else{
            setIsSuccess(false)
        }

        setShowAlert(true)
        // console.log({
        //     'email': email,
        //     'password': password
        // });
        // // call API
    }
    const handleGetAccount = ()=>{
        // fetching data from api
        setEmail('phuclamle.@gmail.com')
        setPassword('12345678')
    }
 
 
    return(
        <div>
            <h1>Login Form</h1>
            {
                showAlert && isSuccess &&(
                    <div className="alert alert-success d-flex justify-content-between align-items-center" role="alert">
            Login success
            <span role="button" className="text-dark fs-5 fw-bolder"
            onClick={()=>{setShowAlert(false)}}
            >&times;</span>
            </div>
                ) || showAlert && !isSuccess && (
                    <div class="alert alert-danger d-flex justify-content-between align-items-center" role="alert">
            Login fail
            <span role="button" className="text-dark fs-5 fw-bolder"
            onClick={()=>{setShowAlert(false)}}
            >&times;</span>
            </div>
                )
            }
            <form onSubmit={handleSubmitLogin}>
                <div className="form-group mb-3">
                    <label htmlFor="">Email</label>
                    {/* requied action when form is send to server  */}
                    <input type="email" className="form-control" required
                    value={email}
                    onInput={(e)=>setEmail(e.target.value)}
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="">Password</label>
                    <input type="password" minLength={8}  className="form-control" required
                    value={password}
                    onInput={(e)=>setPassword(e.target.value)}
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

export default TwoWayBindingFormSubmit;