import Button from "../Button/Button";
import React from "react";

type ShowResultsProps = {
    resultValue: number;
    increaseValue:() => void;
    resetValue:() => void;
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
            <div>{props.resultValue}</div>
            <>
                <Button title={'inc'} onClick={increaseValueHandler}/>
                <Button title={'reset'} onClick={resetValueHandler}/>
            </>
        </div>
    )
}
export default ShowResults