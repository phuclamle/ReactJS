import React from "react";

class RadioGroup extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            selected:'',
            hobbies: ["Football",'Swimming','Walking']
        }  
    }
    handleChangeHobby = (e)=>{
        this.setState({
            ...this.state,
            selected: e.target.value
        })
    }
    componentDidUpdate(){
        console.log(this.state.selected);
    }
    render(){
        return(
            <>
                <h3>Please choice hobby</h3>
                {
                    this.state.hobbies.map((hobby)=> (
                        <div key={hobby}>
                            <label >
                                <input type="radio"   value={hobby}
                                checked = {this.state.selected === hobby}
                                onChange={this.handleChangeHobby}
                                />
                                {hobby}
                            </label>
                        </div>
                    ))
                }
            </>
        )
    }

}

export default RadioGroup;