import React from 'react';
import './Button.css';

const Button = ({ value }) => {

    return (
        <button value={value}
            className={value === "=" ? "button-equals" : "button"}>
            {value}
        </button>
    );
}

export default Button;