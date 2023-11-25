import React ,{useState} from "react";
import { useEffect } from "react";

function Timer(){
    const [Timer,setTimer] = useState(10)
    useEffect(()=>{
        const interval = setInterval(()=>{
            setTimer(Timer-1)
        },1000)

        if(Timer == 0){
            alert("Time's up")
            clearInterval(interval)
        }
        return() =>{
            clearInterval(interval)
        }
    },[Timer])

   

    return(
        <>
        <div>Count down for {Timer}</div>
        </>
    )
}

export default Timer;