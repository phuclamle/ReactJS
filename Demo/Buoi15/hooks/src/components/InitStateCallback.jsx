import React from "react";
import { useState } from "react";

function InitStateCallback(){
    const [amount,setAmout] = useState(0)
    const [totalAmount,setTotalAmount] = useState(()=>{
    const bills = [200,250,540,230]
    const total = bills.reduce(function(prevValue,curValue){
        return prevValue + curValue
    })
    return total
    })


    const handleInputAmount = (e)=>{
        setAmout(Number(e.target.value));
    }
    const handlePayment = ()=>{
        setTotalAmount(totalAmount + amount)
    }

    
    return(
        <div className="container mt-4">
            <input type="number" onInput={handleInputAmount} />
            <button onClick={handlePayment}>Payment</button>
            <br />
            <h1>Total amount: {totalAmount} </h1>
        </div>
    )
}

export default InitStateCallback;