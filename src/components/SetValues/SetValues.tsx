import Input from "../Input/Input";
import Button from "../Button/Button";
import React from "react";

type SetValuesType = {
    maxValue: number
    startValue: number
    changeMaxValue: (number: number) => void
    changeStartValue: (number: number) => void
    setNumbers: () => void


}
const SetValues = (props: SetValuesType) => {

    const [disabledSetValues, setDisabledSetValuesButton] = React.useState(false);

    const onChangeMaxValueHandler = (number: number) => {
        props.changeMaxValue(number)
        setDisabledSetValuesButton(false)
    }
    const onChangeStartValueHandler = (number: number) => {
        props.changeStartValue(number)
        setDisabledSetValuesButton(false)
    }
    const setNumbersHandler = () => {
        props.setNumbers()
        setDisabledSetValuesButton(true)
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
                        disabled={disabledSetValues}/>
            </div>
        </div>
    )
}
export default SetValues