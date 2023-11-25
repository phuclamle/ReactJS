import React ,{ useState } from "react";
import App from '../App'

function Counter2(){
     const [count,handleIncrease] = App()
     return(
       <>
        <p>Count: {count}</p>
        <button onClick={()=>handleIncrease(2)}>Add 2</button>
       </>
     )

     }

     export default Counter2;