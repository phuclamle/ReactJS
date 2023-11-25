import React ,{ useState } from "react";
import App from '../App'

function Counter1(){
     const [count,handleIncrease] = App()
     return(
       <>
        <p>Count: {count}</p>
        <button onClick={handleIncrease(1)}>Add 1</button>
       </>
     )

}
export default Counter1;