import React from "react";


function Infomation_item(props){
    return(
        <li className='list-group-item' key={props.id}><span className='fw-bolder'>{props.children}</span></li>
    )
};

export default Infomation_item;