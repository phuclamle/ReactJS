import React from "react";

class Content extends React.Component{
    constructor(props){
        super(props)
        this.state = {
           number: 1 
        }
    }

    // được thực hiện khi component này được gắn vào trong DOM
    componentDidMount(){
        console.log("Content Component Did mount");
    }
    // Unmount được thực hiện khi component gỡ ra khỏi DOM, luôn được thực hiện đầu tiên
    componentWillUnmount(){
        console.log("Content component willunmount");
    }
    //DidUpdate được chạy khi component có sự thay đổi
    componentDidUpdate(){
        // console.log(`Content component did update -${this.state.number}`);
        console.log(this.props);
    }
    handleIncreament = ()=>{this.setState({...this.state,
        // tạo ra đối tượng mới
        number: this.state.number + 1})
    }
    render(){
        return(
            <>
            <h1 style={{backgroundColor:this.props.bgColor,color:this.props.color}}>Content-{this.state.number}</h1>
            <button onClick={this.handleIncreament}>Increament</button>
            </>
        )
    }
}

export default Content;