import React from 'react';
import Input from "../Input/Input";
import Button from "../Button/Button";


const Counter = () => {
    const [startValue, setStartValue] = React.useState<number>(0);
    const [maxValue, setMaxValue] = React.useState<number>(0);
    const [resultValue, setResultValue] = React.useState<number>(0);

    const onChangeMaxValueHandler = (number: number) => {
        setMaxValue(number);
    }

    const onChangeStartValueHandler = (number: number) => {
        setStartValue(number);
    }
    const setNumbersHandler = () => {
        setMaxValue(maxValue);
        setStartValue(startValue);
        setResultValue(startValue);
    }
    const increaseValueHandler = () => {
        const newValue= resultValue+1
        setResultValue(newValue)
    }

    const resetValueHandler = () => {
        setResultValue(startValue)
    }
    return (
        <div className="App">
            <div className='set-numbers'>
                <div>
                    Max value:
                    <Input value={maxValue} onChange={()=>onChangeMaxValueHandler} type={'number'}/>
                </div>
                <div>
                    Start value:
                    <Input value={startValue} onChange={()=>onChangeStartValueHandler} type={'number'}/>
                </div>
                <div>
                    <Button title={'set'} onClick={setNumbersHandler}/>
                </div>
            </div>
            <div className='show-results'>
                <div>{resultValue}</div>
                <>
                    <Button title={'inc'} onClick={increaseValueHandler}/>
                    <Button title={'reset'} onClick={resetValueHandler}/>
                </>
            </div>
        </div>
    );
}


export default Counter;
