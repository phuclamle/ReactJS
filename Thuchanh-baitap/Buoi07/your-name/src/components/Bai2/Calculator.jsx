import React, { Component } from "react";

class Calculator extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            number1: 0,
            number2:0,
            sum: 0
        }

    }
    handleChangeNum = (e) =>{
            this.setState({
                ...this.state,
                [e.target.name] : parseInt(e.target.value)
            })
            console.log(this.state.number1);
            console.log(this.state.number2);

    }
    handleSum = ()=>{
        this.setState({
            ...this.state,
            sum: this.state.number1 + this.state.number2
        })
        console.log(this.state.sum);
    }

    handleSub = ()=>{
        this.setState({
            ...this.state,
            sum: this.state.number1 - this.state.number2
        })
        console.log(this.state.sum);
    }

    handleMulti = ()=>{
        this.setState({
            ...this.state,
            sum: this.state.number1 * this.state.number2
        })
        console.log(this.state.sum);
    }

    handleDivide = ()=>{
        this.setState({
            ...this.state,
            sum: this.state.number1 / this.state.number2
        })
        console.log(this.state.sum);
    }

    render() {
       return(
        <>
            <input type="number" name="number1" onInput={this.handleChangeNum}  /> 
            <br />
            <input type="number" name="number2" onInput={this.handleChangeNum}  className="mt-3"/>
            <br />
            <h5>Result:{this.state.sum} </h5>
            <div>
                <button onClick={this.handleSum}>+</button>
                <button onClick={this.handleSub}>-</button>
                <button onClick={this.handleMulti}>x</button>
                <button onClick={this.handleDivide}>/</button>
            </div>
        </>
       )
    }

}
export default Calculator