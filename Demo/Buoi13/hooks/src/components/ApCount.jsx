import React from "react";
import Content from "./Content";

class AppCount extends React.Component{
    constructor(props){
        super(props)
        // thuộc tính của class Component, chịu trách nhiệm lưu giữ trạng thái component
        this.state = {
            number: 10 ,
            showContent :false
        };
    }
    handleDecreament=() =>{
        this.setState({
            ...this.state,
            number: this.state.number -1
        })
    }
    handleIncreament = ()=>{this.setState({...this.state,
        // tạo ra đối tượng mới
        number: this.state.number + 1})
    }
    handleToggleContent=()=>{
        this.setState({
            ...this.state,
            showContent: !this.state.showContent
        })
    }
    render(){
        return(
            <>
            <h1>{this.state.number}</h1>
            <button onClick={this.handleDecreament}>Decreament</button>
            <button onClick={this.handleIncreament}>Increament</button>
            <br />
            <button
            onClick={this.handleToggleContent}
            >Toggle Content Component</button>
            {
                this.state.showContent &&  <Content bgColor={"green"}/>
            }
            </>
        )
    }
}

export default AppCount;