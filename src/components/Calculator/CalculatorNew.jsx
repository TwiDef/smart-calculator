import React, { useReducer } from 'react';
import Display from '../Display/Display';
import ButtonBox from '../ButtonBox/ButtonBox';
import calcReducer from '../../reducers/calcReducer';
import './Calculator.css';

const CalculatorNew = (props) => {
    const initialState = {
        sign: "",
        num: "0",
        res: "0"
    }
    const [state, dispatch] = useReducer(calcReducer, initialState)

    const onTypeNum = (e) => dispatch(
        {
            type: "typeNum",
            payload: { num: e.target.value }
        }
    )
    const onClearAll = () => dispatch(
        {
            type: "clearAll",
        }
    )
    const onClearLast = () => dispatch(
        {
            type: "clearLast",
        }
    )
    const onTypeSign = (e) => dispatch(
        {
            type: "typeSign",
            payload: { sign: e.target.value }
        }
    )


    return (
        <div className='calculator'>
            <Display value={state.num} />
            <ButtonBox
                handleOnTypeNum={onTypeNum}
                handleOnClearAll={onClearAll}
                handleOnClearLast={onClearLast}
                handleOnTypeSign={onTypeSign}
                /* handleClearAll={clearAll}
                handleClearLast={clearLast}
                handleTypeNum={typeNum}
                handleTypeSign={typeSign}
                handleEqualAct={equalAct}
                handleTypeDot={typeDot}
                handleTypePercent={typePercent} */ />
        </div>
    );
}

export default CalculatorNew;