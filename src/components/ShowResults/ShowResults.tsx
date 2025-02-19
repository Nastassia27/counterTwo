import Button from "../Button/Button";
import React from "react";
import './showResults.css'

type ShowResultsProps = {
    resultValue: number;
    increaseValue:() => void;
    resetValue:() => void;
    maxValue:number;
}

const ShowResults = (props:ShowResultsProps) => {

    const increaseValueHandler =()=>{
        props.increaseValue()
    }

    const resetValueHandler =()=>{
        props.resetValue()
    }

        return (
        <div className='show-results'>
            <div className={props.resultValue===props.maxValue ?'show-results-max': 'show-results-numbers'}>{props.resultValue}</div>
            <div className={'show-results-buttons'}>
                <Button title={'inc'} onClick={increaseValueHandler} disabled={props.resultValue>=props.maxValue}/>
                <Button title={'reset'} onClick={resetValueHandler}/>
            </div>
        </div>
    )
}
export default ShowResults