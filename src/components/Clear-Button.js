import React from "react";
import '../css/Clear-Button.css';

function ClearButton(props){
    return(    
    <div className="Clear-Button">
        {props.children}
    </div>
    );
}


export default ClearButton;