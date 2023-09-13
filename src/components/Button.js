import React from "react";
import '../css/Button.css';

function Button(props){

    // Funcion que comprueba si es operador o no
    const isOperator = value => {
        return isNaN(value) && (value !== '.') && (value !== '=');
    };

    // document.querySelector('.button-container').addEventListener('click', () => { props.controlVisor(props.children) });


    return (
        <div className={`button-container ${isOperator(props.children) ? 'operator' : ''}`.trimEnd()}
        onClick={() => props.controlVisor(props.children) }>
            {props.children}
        </div>
    );
}

export default Button;