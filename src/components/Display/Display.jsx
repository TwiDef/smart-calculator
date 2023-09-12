import React from 'react';
import './Display.css';

const Display = ({ value }) => {
    return (
        <div className='display'>
            <span className='display-value'>{value}</span>
        </div>
    );
}

export default Display;