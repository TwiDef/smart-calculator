import React from 'react';
import './Button.css';

const Button = ({ value }) => {

    return (
        <button value={value} className='button'>
            {value}
        </button>
    );
}

export default Button;