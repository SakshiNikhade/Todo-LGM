import React, { useState } from "react";

const TodoOutput =(props)=>{

    const [line,setLine]=useState(false)
    const cutIt=()=>{
        setLine(true);
    }
    
   
return( 
    <div className="output">
    <span onClick={cutIt}>
    <i className="fa fa-check-square check" aria-hidden="true"></i>
    </span>
        <li className="list" style={{textDecoration:line ? "line-through" : "none"}}>{props.text}</li>
        
        <i className="fa fa-trash-o button" 
        aria-hidden="true" onClick={()=>{
            props.onSelect(props.id)
        }}></i>
        
    </div>
);
}
export default TodoOutput;