import React from 'react';
import Buttons from '../Buttons/Buttons';
import Display from '../Display/Display';
import './Calculator.css';

const Calculator = (props) => {
    return (
        <div className="calc-box">
            <Display counts={props.counts} />
            <Buttons />
        </div>
    );
}

export default Calculator;