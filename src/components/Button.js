import React from "react";
import '../css/Button.css';

function Button({onclick,children}){

    // Funcion que comprueba si es operador o no
    const isOperator = (value) => {
        return isNaN(value) && (value !== '.') && (value !== '=');
    };

    return (
        <div className={`button-container ${isOperator(children) ? 'operator' : ''}`.trimEnd()}
        onClick={ () => onclick(children) }>
            {children}
        </div>
    );
};

export default Button;