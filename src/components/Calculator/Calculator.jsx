import React, { useState } from 'react';
import Display from '../Display/Display';
import ButtonBox from '../ButtonBox/ButtonBox';
import './Calculator.css';

const Calculator = () => {
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

        if (calc.num.length !== 16) {
            setCalc({
                ...calc,
                num: (calc.num += e.target.value).replace(/^0/, "")
            })
        }
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
            const math = (a, b, sign) => {
                if (sign === "/") {
                    if (b === 0) {
                        return 'Cant divide by 0'
                    }
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

    const typeDot = (e) => {
        e.preventDefault()
        setCalc({
            ...calc,
            num: `${calc.num}${e.target.value}`
        })
    }

    const typePercent = () => {
        let num = calc.num ? parseFloat(calc.num) : 0
        let res = calc.res ? parseFloat(calc.res) : 0

        setCalc({
            ...calc,
            num: (num /= Math.pow(100, 1)),
            res: (res /= Math.pow(100, 1)),
            sign: ""
        })
    }

    return (
        <div className='calculator'>
            <Display value={String(calc.num ? calc.num : calc.res)} />
            <ButtonBox
                handleClearAll={clearAll}
                handleClearLast={clearLast}
                handleTypeNum={typeNum}
                handleTypeSign={typeSign}
                handleEqualAct={equalAct}
                handleTypeDot={typeDot}
                handleTypePercent={typePercent} />
        </div>
    );
}

export default Calculator;