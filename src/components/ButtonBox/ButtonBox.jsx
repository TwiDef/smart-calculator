import React from 'react';
import Button from '../Button/Button';
import './ButtonBox.css';

const ButtonBox = ({
    handleTypeDot,
    handleOnTypeNum,
    handleOnClearAll,
    handleOnClearLast,
    handleOnTypeSign,
    handleOnEqual,
    handleOnTypePercent
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
                            handleOnClearAll
                            : btn === "<" ?
                                handleOnClearLast
                                : btn === "/" || btn === "*" || btn === "-" || btn === "+" ?
                                    handleOnTypeSign
                                    : btn === "=" ?
                                        handleOnEqual
                                        : btn === "." ?
                                            handleTypeDot
                                            : btn === "%" ?
                                                handleOnTypePercent
                                                : handleOnTypeNum
                    }>
                    <Button value={btn} />
                </div>)}
        </div>
    );
}

export default ButtonBox;