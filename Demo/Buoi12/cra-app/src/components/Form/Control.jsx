import React from "react";

function Control(props){
    // const {type} = props;
    return(
        <div className="form-group">
        <label className="form-label">{props.label}</label>
        <input className={props.type=="checkbox"?'form-checkbox':"form-control"} 
                type={props.type} 
                placeholder={props.label} />
        </div>
    );
}

export default Control;