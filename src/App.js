import React, { useState } from 'react';
import Calculator from './components/Calculator/Calculator';

import './App.css';


function App() {
    const [counts, setCounts] = useState('0')
    const [result, setResult] = useState('')

    return (
        <>
            <div className="background"></div>

            <div className="App">
                <Calculator counts={counts} />
            </div >
        </>

    );
}

export default App;
