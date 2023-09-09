import React from 'react';
import './Buttons.css';

const Buttons = (props) => {
    const buttons = [
        { value: 1 },
        { value: 2 },
        { value: 3 },
        { value: 4 },
        { value: 5 },
        { value: 6 },
        { value: 7 },
        { value: 8 },
        { value: 9 },
        { value: 0 },
    ]
    const operationButtons = [
        { value: "AC" },
        { value: "<" },
        { value: "%" },
        { value: "/" },
        { value: "*" },
        { value: "-" },
        { value: "+" },
        { value: "=" },
        { value: "." },
    ]

    return (
        <div className='calc-buttons'>
            {buttons.map(button => <button>{button.value}</button>)}
            {operationButtons
                .map(button => button.value === "=" ?
                    <button className='calc-btn-fullorange'>{button.value}</button> :
                    <button className='calc-btn-orange'>{button.value}</button>)}
        </div>
    );
}

export default Buttons;