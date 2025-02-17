import Input from "../Input/Input";
import Button from "../Button/Button";
import React from "react";
import './setValues.css'

type SetValuesType = {
    maxValue: number
    startValue: number
    changeMaxValue: (number: number) => void
    changeStartValue: (number: number) => void
    setNumbers: () => void
    disabled: boolean


}
const SetValues = (props: SetValuesType) => {

    const onChangeMaxValueHandler = (number: number) => {
        props.changeMaxValue(number)
    }
    const onChangeStartValueHandler = (number: number) => {
        props.changeStartValue(number)
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
                <Button title={'set'}
                        onClick={setNumbersHandler}
                        /*className={disabledSetValues ? '' : ''}*/
                        disabled={props.disabled}/>
            </div>
        </div>
    )
}
export default SetValues