import React from "react";
import { useEffect } from "react";


function HomePage(){
    useEffect(()=>{
        console.log('mounted home page');
    },[])
    return(
       <h1>Home Page</h1>
    )
}

export default HomePage;

