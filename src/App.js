import React from 'react';
import Calculator from './components/Calculator/Calculator';
import './App.css';
import CalculatorNew from './components/Calculator/CalculatorNew';

function App() {
    return (
        <>
            <div className='background'></div>

            <div className='App'>
                <CalculatorNew />
            </div>
        </>


    );
}

export default App;
