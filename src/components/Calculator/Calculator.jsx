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

    const typeSign = (e) => {
        e.preventDefault()
        setCalc({
            ...calc,
            sign: e.target.value,
            res: !calc.res && calc.num ? calc.num : calc.res,
            num: 0
        })
    }

    const equalAct = () => {

        if (calc.sign && calc.num) {
            console.log(calc.res, calc.sign, calc.num)
            const math = (a, b, sign) => {
                if (sign === "/") {
                    return a / b
                }
                if (sign === "*") {
                    return a * b
                }
                if (sign === "-") {
                    return a - b
                }
                if (sign === "+") {
                    return a + b
                }
            }
            setCalc({
                ...calc,
                res: math(Number(calc.res), Number(calc.num), calc.sign),
                sign: "",
                num: 0
            })
        }
    }

    return (
        <div className='calculator'>
            <Display value={calc.num ? calc.num : calc.res} />
            <ButtonBox
                handleClearAll={clearAll}
                handleClearLast={clearLast}
                handleTypeNum={typeNum}
                handleTypeSign={typeSign}
                handleEqualAct={equalAct} />
        </div>
    );
}

export default Calculator;