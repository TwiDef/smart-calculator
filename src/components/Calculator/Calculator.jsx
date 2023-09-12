import React, { useState } from 'react';
import Display from '../Display/Display';
import ButtonBox from '../ButtonBox/ButtonBox';
import './Calculator.css';

const Calculator = (props) => {
    let [calc, setCalc] = useState({
        sign: "",
        num: 0,
        res: 0
    })

    const clearAll = (e) => {
        e.preventDefault()
        setCalc({
            sign: "",
            num: 0,
            res: 0
        })
    }

    const clearLast = (e) => {
        e.preventDefault()
        if (calc.num === 0) return

        setCalc({
            ...calc,
            num: (calc.num).slice(0, -1)
        })
    }

    const typeNum = (e) => {
        e.preventDefault()
        setCalc({
            ...calc,
            num: (calc.num += e.target.value).replace(/^0/, "")
        })


    }

    return (
        <div className='calculator'>
            <Display value={calc.num ? calc.num : calc.res} />
            <ButtonBox
                handleClearAll={clearAll}
                handleClearLast={clearLast}
                handleTypeNum={typeNum} />
        </div>
    );
}

export default Calculator;