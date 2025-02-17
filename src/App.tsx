import React from 'react';
import logo from './logo.svg';
import './App.css';
import Input from "./components/Input/Input";

function App() {
    const [startValue, setStartValue] = React.useState('');
    const [maxValue, setMaxValue] = React.useState('');

    const onChangeMaxValueHandler=()=>{
        setMaxValue('');
    }

    const onChangeStartValueHandler=()=>{
        setStartValue('');
    }
    return (
        <div className="App">
            <div>
                Max value:
                <Input value={maxValue} onChange={onChangeMaxValueHandler} type='number'/>
            </div>
            <div>
                Start value:
                <Input value={startValue} onChange={onChangeStartValueHandler} type='number'/>
            </div>
        </div>
    );
}

export default App;
