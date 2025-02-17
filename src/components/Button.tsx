type ButtonPropsType = {
    title: string;
    onClick: () => void;
    className?: string;
}

const Botton = (props: ButtonPropsType) => {
    const onClickHandler=() => {
        props.onClick();
    }

    return (
        <button className={props.className} onClick={onClickHandler}>{props.title}</button>
    )
}

export default Botton