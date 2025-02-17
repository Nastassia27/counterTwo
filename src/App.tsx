import React from 'react';
import logo from './logo.svg';
import './App.css';
import Input from "./components/Input/Input";
import Button from "./components/Button/Button";

function App() {
    const [startValue, setStartValue] = React.useState('');
    const [maxValue, setMaxValue] = React.useState('');
    const [resultValue, setResultValue] = React.useState('');

    const onChangeMaxValueHandler = () => {
        setMaxValue('');
    }

    const onChangeStartValueHandler = () => {
        setStartValue('');
    }
    const setNumbersHandler = () => {

    }
    const increaseValueHandler = () => {
        setResultValue('')
    }

    const resetValueHandler = () => {
        setResultValue('')
    }
    return (
        <div className="App">
            <div className='set-numbers'>
                <div>
                    Max value:
                    <Input value={maxValue} onChange={onChangeMaxValueHandler} type='number'/>
                </div>
                <div>
                    Start value:
                    <Input value={startValue} onChange={onChangeStartValueHandler} type='number'/>
                </div>
                <div>
                    <Button title={'set'} onClick={setNumbersHandler}/>
                </div>
            </div>
            <div className='show-results'>
                <div>{resultValue}{2}</div>
                <>
                    <Button title={'inc'} onClick={increaseValueHandler}/>
                    <Button title={'reset'} onClick={resetValueHandler}/>
                </>
            </div>
        </div>
    );
}

export default App;
