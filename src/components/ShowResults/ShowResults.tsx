import Button from "../Button/Button";
import React from "react";
import './showResults.css'

type ShowResultsProps = {
    resultValue: number;
    increaseValue: () => void;
    resetValue: () => void;
    maxValueFix: number;
    startValueFix: number
    isClicked: boolean
}

const ShowResults = (props: ShowResultsProps) => {

    const increaseValueHandler = () => {
        props.increaseValue()
    }

    const resetValueHandler = () => {
        props.resetValue()
    }
    const showText = () => {
        if (props.startValueFix < 0 || props.maxValueFix < 0 || props.startValueFix > props.maxValueFix) {
            return <p style={{color: 'red'}}>Incorrect value!</p>
        } else if(!props.isClicked){
            return 'Enter values and press \'set\''
        } else{
            return props.resultValue
        }
    }

    return (
        <div className='show-results'>
            <div className={props.resultValue === props.maxValueFix ? 'show-results-max' : 'show-results-numbers'}>
                {showText()}
            </div>
            <div className={'show-results-buttons'}>
                <Button title={'inc'} onClick={increaseValueHandler} disabled={props.resultValue >= props.maxValueFix}/>
                <Button title={'reset'} onClick={resetValueHandler}/>
            </div>
        </div>
    )
}
export default ShowResults