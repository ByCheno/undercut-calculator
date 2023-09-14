import React from "react";
import '../css/Clear-Button.css';

function ClearButton(props){

    return(    
        <div className="Clear-Button"
            onClick={ props.reset }>
            {props.children}
        </div>
    );
}


export default ClearButton;