import React from 'react';
import SetValues from "../SetValues/SetValues";
import ShowResults from "../ShowResults/ShowResults";


const Counter = () => {
    const [startValue, setStartValue] = React.useState<number>(0);
    const [maxValue, setMaxValue] = React.useState<number>(0);
    const [resultValue, setResultValue] = React.useState<number>(0);

    const [disableButtons, setDisabledButton] = React.useState(false);


    const onChangeMaxValueHandler = (number: number) => {
        setMaxValue(number);
        setDisabledButton(false)
    }

    const onChangeStartValueHandler = (number: number) => {
        setStartValue(number);
        setDisabledButton(false)
    }
    const setNumbersHandler = () => {
        setMaxValue(maxValue);
        setStartValue(startValue);
        setResultValue(startValue);
        setDisabledButton(true)
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
            <SetValues maxValue={maxValue}
                       startValue={startValue}
                       changeMaxValue={onChangeMaxValueHandler}
                       changeStartValue={onChangeStartValueHandler}
                       setNumbers={setNumbersHandler}
                       disabled={disableButtons}

            />
        <ShowResults resultValue={resultValue}
                     increaseValue={increaseValueHandler}
                     resetValue={resetValueHandler}
                     maxValue={maxValue}
        />
        </div>
    );
}


export default Counter;
