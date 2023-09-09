import React from "react";

function Button(props){
    // Funcion que comprueba que no sea numero, punto o igual y devuelve true
    const isOperator = value => {
        const result = isNaN(value) && value !== '.' && value !== '=';
        console.log(`Value: ${value}, isOperator: ${result}`);
        return result;
    };

    console.log(`props.child: ${props.child}`);

    return (
        <div className={`button-container ${isOperator(props.child) ? 'operator' : ''}`.trimEnd()}>
            {props.child}
        </div>
    );
}


export default Button;