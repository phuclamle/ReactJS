import React, {useReducer} from "react";
import { useState } from "react";
import { initState,reducer } from "../reducer/reducer";
import { inputAmount,withDraw,deposit } from "../reducer/action";

// useReducer
// 1. initState = khởi tạo dữ liệu (bất cứ kiểu dữ liệu)
// 2.actions = hành động
// 3.reducer = là 1 hàm
// 4. dispatch = là 1 hàm, kích hoạt hành động


function BankingApp(){
    const [state,dispatch] = useReducer(reducer,initState)
    console.log(state);

    const handleInputAMount = (e)=>{
        dispatch(inputAmount(e.target.value)) 
        //inputAmount(8) =>{
        // type:'bank/inputamount',
        // payload: 8
        //}
    }

    const handleDeposit = ()=>{
        dispatch(deposit())
    }

    const handleWithDraw = ()=>{
        dispatch(withDraw())
    }



    return(
        <div>
            <h3 className="text-danger">ATM</h3>
            <div>
                <h3>Blance: {state.blance} đ</h3>
            </div>
            <form action="">
                <div className="form-group mb-2">
                    <label>Amount</label>
                    <input type="number" className="form-control"
                    value={state.amount}
                    onInput={handleInputAMount}
                    />
                </div>
                <div className="form-group">
                    <button type="button" className="btn btn-warning me-2"
                    onClick={handleDeposit}
                    >Deposit</button>
                    <button type="button" className="btn btn-success"
                    onClick={handleWithDraw}
                    >WithDraw</button>
                </div>
            </form>
        </div>
    )
}
export default BankingApp