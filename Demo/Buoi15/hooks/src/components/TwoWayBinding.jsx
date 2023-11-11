import React from "react";
import App from "../App";
import { useState } from "react";

function TwoWayBinding(){
    const [email,setEmail] = useState()
    const[password,setPassword] = useState()

    const handleLogin = () =>{
        console.log({
            'email': email,
            'password': password
        });
        // call API
    }
    console.log(email,password);
    return(
        <div>
            <h1>Login Form</h1>
            <form>
                <div className="form-group mb-3">
                    <label htmlFor="">Email</label>
                    <input type="email" className="form-control"
                    onInput={(e)=>setEmail(e.target.value)}
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="">Password</label>
                    <input type="password" className="form-control"
                    onInput={(e)=>setPassword(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <button type="button" className="btn btn-dark"
                    onClick={handleLogin}
                    >Login</button>
                </div>
            </form>
        </div>
    )
}

export default TwoWayBinding;