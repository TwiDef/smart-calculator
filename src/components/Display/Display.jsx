import React from 'react';
import './Display.css';

const Display = ({ value }) => {

    return (
        <div className='display'>
            <span className='display-value'>{
                value.length > 15 ? `${value.slice(0, 15)}e^` : value
            }</span>
        </div>
    );
}

export default Display;