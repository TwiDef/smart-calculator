import React from 'react';
import Calculator from './components/Calculator/Calculator';
import './App.css';
import Display from './components/Display/Display';
import ButtonBox from './components/ButtonBox/ButtonBox';

function App() {
    return (
        <>
            <div className='background'></div>

            <div className='App'>
                <Calculator />
            </div>
        </>


    );
}

export default App;
