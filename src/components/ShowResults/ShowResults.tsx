import Button from "../Button/Button";
import React from "react";
import './showResults.css'

type ShowResultsProps = {
    resultValue: number;
    increaseValue: () => void;
    resetValue: () => void;
    maxValue: number;
    text: string;
    startValue: number
}

const ShowResults = (props: ShowResultsProps) => {

    const increaseValueHandler = () => {
        props.increaseValue()
    }

    const resetValueHandler = () => {
        props.resetValue()
    }
    const showText = () => {
        if(props.startValue<0 || props.maxValue<0 || props.startValue>=props.maxValue){
            return <p style={{ color: 'red' }}>Incorrect value!</p>
        } else{
            return props.resultValue
        }
    }

    return (
        <div className='show-results'>
            <div className={props.resultValue === props.maxValue ? 'show-results-max' : 'show-results-numbers'}>
                {showText()}
            </div>
            <div className={'show-results-buttons'}>
                <Button title={'inc'} onClick={increaseValueHandler} disabled={props.resultValue >= props.maxValue}/>
                <Button title={'reset'} onClick={resetValueHandler}/>
            </div>
        </div>
    )
}
export default ShowResults