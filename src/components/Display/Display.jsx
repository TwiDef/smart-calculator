import React from 'react';
import './Display.css';

const Display = (props) => {
    return (
        <div className="calc-display">
            <div className="calc-display-result">{props.counts}</div>
        </div>
    );
}

export default Display;