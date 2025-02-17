import Input from "../Input/Input";
import Button from "../Button/Button";
import React from "react";

type SetValuesType = {
    maxValue: number
    startValue: number
    changeMaxValue: () => void
    changeStartValue: () => void
    setNumbers: () => void


}
const SetValues = (props: SetValuesType) => {
    const onChangeMaxValueHandler = () => {
        props.changeMaxValue()
    }
    const onChangeStartValueHandler = () => {
        props.changeStartValue()
    }
    const setNumbersHandler = () => {
        props.setNumbers()
    }

    return (
        <div className='set-numbers'>
            <div>
                Max value:
                <Input value={props.maxValue} onChange={onChangeMaxValueHandler} type={'number'}/>
            </div>
            <div>
                Start value:
                <Input value={props.startValue} onChange={onChangeStartValueHandler} type={'number'}/>
            </div>
            <div>
                <Button title={'set'} onClick={setNumbersHandler}/>
            </div>
        </div>
    )
}
export default SetValues