import React from 'react';
import SetValues from "../SetValues/SetValues";
import ShowResults from "../ShowResults/ShowResults";
import './counter.css';


const Counter = () => {
    const [startValue, setStartValue] = React.useState<number>(0);
    const [startValueFix, setStartValueFix] = React.useState<number>(0);

    const [maxValue, setMaxValue] = React.useState<number>(0);
    const [maxValueFix, setMaxValueFix] = React.useState<number>(0);

    const [resultValue, setResultValue] = React.useState<number>(0);

    const [isClicked, setIsClicked]= React.useState<boolean>(false);
    //const [disableButtons, setDisabledButton] = React.useState(false);


    const onChangeMaxValueHandler = (number: number) => {
        setMaxValue(number);
        setIsClicked(false)
    }

    const onChangeStartValueHandler = (number: number) => {
        setStartValue(number);
        setIsClicked(false)
    }
    const setNumbersHandler = () => {
        setStartValueFix(startValue)
        setMaxValueFix(maxValue)
        setResultValue(startValue);
        setIsClicked(true)
    }
    const increaseValueHandler = () => {
        const newValue= resultValue+1
        setResultValue(newValue)
    }

    const resetValueHandler = () => {
        setResultValue(startValueFix)
    }
    return (
        <div className="container">
            <SetValues maxValue={maxValue}
                       startValue={startValue}
                       changeMaxValue={onChangeMaxValueHandler}
                       changeStartValue={onChangeStartValueHandler}
                       setNumbers={setNumbersHandler}
                       isClicked={isClicked}

            />
        <ShowResults resultValue={resultValue}
                     increaseValue={increaseValueHandler}
                     resetValue={resetValueHandler}
                     maxValue={maxValue}
                     startValue={startValue}
                     isClicked={isClicked}
        />
        </div>
    );
}


export default Counter;
