import React from 'react';
import Button from '../Button/Button';
import './ButtonBox.css';

const ButtonBox = ({
    handleClearAll,
    handleClearLast,
    handleTypeNum,
    handleTypeSign,
    handleEqualAct,
    handleTypeDot,
    handleTypePercent
}) => {

    const buttonValues = [
        ["AC", "<", "%", "/"],
        ["7", "8", "9", "*"],
        ["4", "5", "6", "-"],
        ["1", "2", "3", "+"],
        [".", "0", "="],
    ]

    return (
        <div className='button-box'>
            {buttonValues.flat().map((btn, i) =>
                <div
                    key={i}
                    onClick={
                        btn === "AC" ?
                            handleClearAll
                            : btn === "<" ?
                                handleClearLast
                                : btn === "/" || btn === "*" || btn === "-" || btn === "+" ?
                                    handleTypeSign
                                    : btn === "=" ?
                                        handleEqualAct
                                        : btn === "." ?
                                            handleTypeDot
                                            : btn === "%" ?
                                                handleTypePercent
                                                : handleTypeNum
                    }>
                    <Button value={btn} />
                </div>)}
        </div>
    );
}

export default ButtonBox;